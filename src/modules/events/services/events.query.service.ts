import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';

import { Prisma } from '@peekle/prisma/client';

import { GetEventDetailResponseDto } from '@modules/events/dto/get-event-detail.dto';
import { EventSortField, GetEventsQueryDto, Order } from '@modules/events/dto/get-events.dto';
import { PrismaService } from '@modules/prisma/prisma.service';

@Injectable()
export class EventsQueryService {
  constructor(private readonly prisma: PrismaService) {}

  async getEventsList(query: GetEventsQueryDto) {
    const sortOrder: 'asc' | 'desc' = query.order === Order.ASC ? 'asc' : 'desc';

    // where 절: where 조건을 유연하게 조립하기 위해 조건들을 배열에 모아놓고 나중에 { AND: [...] } 형태로 합침
    const andConds: Prisma.EventWhereInput[] = [];

    // 커서(id 기반)
    if (query.cursor) {
      let cursorId: bigint;
      try {
        cursorId = BigInt(query.cursor);
      } catch {
        throw new BadRequestException('유효하지 않은 cursor입니다.');
      }
      andConds.push({ id: sortOrder === 'asc' ? { gt: cursorId } : { lt: cursorId } });
    }

    // 기간 필터: 선택 구간과 겹치는 이벤트만 (start <= endSelected AND end >= startSelected)
    if (query.startDate && query.endDate) {
      const start = new Date(query.startDate);
      const end = new Date(query.endDate);
      if (isNaN(start.getTime()) || isNaN(end.getTime())) {
        throw new BadRequestException('유효하지 않은 날짜 범위입니다.');
      }
      andConds.push({ startDate: { lte: end } }, { endDate: { gte: start } });
    } else if (query.startDate) {
      const start = new Date(query.startDate);
      if (isNaN(start.getTime())) throw new BadRequestException('유효하지 않은 시작일입니다.');
      andConds.push({ endDate: { gte: start } });
    } else if (query.endDate) {
      const end = new Date(query.endDate);
      if (isNaN(end.getTime())) throw new BadRequestException('유효하지 않은 종료일입니다.');
      andConds.push({ startDate: { lte: end } });
    }

    // 가격 필터
    if (typeof query.isFree === 'boolean') {
      if (query.isFree === true) {
        andConds.push({ price: 0 });
      } else if (query.isFree === false) {
        andConds.push({ price: { not: 0 } });
      }
    }

    // 카테고리 필터(다중)
    if (query.categories?.length) {
      andConds.push({ category: { in: query.categories } });
    }

    // 위치 필터(부분 일치, 대소문자 무시)
    if (query.locations?.length) {
      // 모든 키워드들을 venue* 네 필드에 평탄화해서 OR로 묶음
      const locOr: Prisma.EventWhereInput[] = [];
      for (const keyword of query.locations) {
        locOr.push(
          { venueName: { contains: keyword } },
          { venueRoadAddress: { contains: keyword } },
          { venueJibunAddress: { contains: keyword } },
          { venueDetailAddress: { contains: keyword } },
        );
      }
      andConds.push({ OR: locOr });
    }

    const where: Prisma.EventWhereInput = andConds.length ? { AND: andConds } : {};

    // orderBy 절
    let orderBy: Prisma.EventOrderByWithRelationInput[] = [];

    switch (query.sort) {
      case EventSortField.DATE:
        // 가까운 날짜순 (startDate 기준)
        orderBy = [{ startDate: sortOrder }, { id: sortOrder }];
        break;

      case EventSortField.PRICE:
        // 낮은 금액순 (price 기준)
        orderBy = [{ price: sortOrder }, { id: sortOrder }];
        break;

      case EventSortField.DISTANCE:
        // Prisma는 기본적으로 distance 정렬을 지원하지 않아서 MySQL/DB 함수 (ST_Distance_Sphere 등)를 raw query로 써야 함.
        throw new BadRequestException('거리순 정렬은 현재 지원되지 않습니다.');

      default:
        // 안전 기본값: 날짜순
        orderBy = [{ startDate: sortOrder }, { id: sortOrder }];
        break;
    }

    // 조회: limit+1로 다음 페이지 존재 여부 판단
    const rows = await this.prisma.event.findMany({
      where,
      orderBy,
      take: query.limit + 1,
      select: {
        id: true,
        title: true,
        startDate: true,
        endDate: true,
        price: true,
        category: true,
      },
    });

    const hasNextPage = rows.length > query.limit;
    const sliced = hasNextPage ? rows.slice(0, query.limit) : rows;

    // 썸네일(첫 장) 일괄 조회
    const ids = sliced.map((r) => r.id);
    const firstThumbByEvent = new Map<bigint, string>();
    if (ids.length) {
      const thumbs = await this.prisma.eventImage.findMany({
        where: { eventId: { in: ids } },
        orderBy: [{ eventId: 'asc' }, { order: 'asc' }],
        select: { eventId: true, imageUrl: true, order: true },
      });
      for (const t of thumbs) {
        if (!firstThumbByEvent.has(t.eventId)) firstThumbByEvent.set(t.eventId, t.imageUrl);
      }
    }

    // 응답 매핑
    const events = sliced.map((e) => ({
      id: e.id.toString(),
      title: e.title,
      period: {
        start: e.startDate.toISOString().slice(0, 10),
        end: e.endDate ? e.endDate.toISOString().slice(0, 10) : null,
      },
      price: {
        amount: e.price,
        type: e.price === 0 ? 'FREE' : 'PAID',
        currency: 'KRW',
      },
      category: e.category,
      thumbnailUrl: firstThumbByEvent.get(e.id) ?? null,
    }));

    // 다음 커서: 현재 페이지의 마지막 아이템 id
    const last = sliced.at(-1);
    const nextCursor = last ? last.id.toString() : null;

    return { events, nextCursor, hasNextPage };
  }

  async getEventDetail(id: bigint): Promise<GetEventDetailResponseDto> {
    const event = await this.prisma.event.findUnique({
      where: { id },
      include: {
        eventImage: {
          select: { imageUrl: true, order: true },
          orderBy: { order: 'asc' },
        },
      },
    });

    if (!event) {
      throw new NotFoundException('해당 이벤트를 찾을 수 없습니다.');
    }

    return {
      id: event.id.toString(),
      title: event.title,
      startDate: event.startDate,
      endDate: event.endDate,
      venueName: event.venueName,
      venueRoadAddress: event.venueRoadAddress,
      venueJibunAddress: event.venueJibunAddress,
      venueDetailAddress: event.venueDetailAddress,
      price: event.price,
      link: event.link,
      description: event.description,
      authorId: event.authorId.toString(),
      category: event.category,
      createdAt: event.createdAt,
      updatedAt: event.updatedAt,
      images: event.eventImage.map((img) => ({
        imageUrl: process.env.CLOUDFRONT_URL + img.imageUrl, // TODO: 이미지 URL 저장 방식에 따라 수정이 필요(할 수도 있고 안 할 수도 있습니다)
        order: img.order,
      })),
    };
  }
}
