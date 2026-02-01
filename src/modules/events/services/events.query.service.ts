import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';

import { Prisma } from '@peekle/prisma/client';

import { GetEventDetailResponseDto } from '@modules/events/dto/get-event-detail.dto';
import { EventSortField, GetEventsQueryDto, Order } from '@modules/events/dto/get-events.dto';
import { PrismaService } from '@modules/prisma/prisma.service';

@Injectable()
export class EventsQueryService {
  constructor(private readonly prisma: PrismaService) {}

  // 이벤트 목록 조회 API
  // - 필터(query) 기반으로 이벤트를 조회
  // - 정렬 기준(DATE / PRICE / DISTANCE)에 따라 쿼리 분기
  // - 커서 기반 페이징 처리
  // - 로그인 사용자일 경우 찜 여부 계산
  // - 썸네일 + 응답 DTO로 가공
  async getEventsList(query: GetEventsQueryDto, userId?: bigint) {
    const sortOrder: 'asc' | 'desc' = query.order === Order.ASC ? 'asc' : 'desc';

    // where 절: Prisma용 필터 조건: 모든 조건은 AND로 묶임
    const andConds: Prisma.EventWhereInput[] = [];

    // 내가 찜한 이벤트만 보기
    if (query.onlyScrapped && userId) {
      andConds.push({
        eventScrap: { some: { userId } },
      });
    }

    // 커서(id 기반) → DATE, PRICE 전용
    if (query.cursor && query.sort !== EventSortField.DISTANCE) {
      let cursorId: bigint;
      try {
        cursorId = BigInt(query.cursor);
      } catch {
        throw new BadRequestException('유효하지 않은 cursor입니다.');
      }
      andConds.push({ id: sortOrder === 'asc' ? { gt: cursorId } : { lt: cursorId } });
    }

    // 기간 필터
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
      if (query.isFree === true) andConds.push({ price: 0 });
      else andConds.push({ price: { not: 0 } });
    }

    // 카테고리 필터 (OR 조건)
    if (query.categories?.length) {
      andConds.push({
        OR: query.categories.map((category) => ({
          category,
        })),
      });
    }

    // 검색어 필터 (제목 기준 검색)
    if (query.search) {
      andConds.push({
        title: { contains: query.search },
      });
    }

    // 위치 필터(부분 일치)
    if (query.locations?.length) {
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

    let rows: Array<any> = [];

    switch (query.sort) {
      case EventSortField.DATE: {
        rows = await this.prisma.event.findMany({
          where,
          orderBy: [{ startDate: sortOrder }, { id: sortOrder }],
          take: query.limit + 1,
          select: {
            id: true,
            title: true,
            startDate: true,
            endDate: true,
            price: true,
            category: true,
            latitude: true,
            longitude: true,
            region1: true,
            region2: true,
          },
        });
        break;
      }

      case EventSortField.PRICE: {
        rows = await this.prisma.event.findMany({
          where,
          orderBy: [{ price: sortOrder }, { id: sortOrder }],
          take: query.limit + 1,
          select: {
            id: true,
            title: true,
            startDate: true,
            endDate: true,
            price: true,
            category: true,
            latitude: true,
            longitude: true,
            region1: true,
            region2: true,
          },
        });
        break;
      }

      // 거리순 정렬
      // 여기서는 Raw SQL로 해야 해서 별도 처리
      case EventSortField.DISTANCE: {
        if (query.latitude == null || query.longitude == null) {
          throw new BadRequestException(
            '거리순 정렬에는 위치 정보(latitude, longitude)가 필요합니다.',
          );
        }

        const lat = query.latitude;
        const lng = query.longitude;

        let cursorDistance: number | null = null;

        // cursor 기준 distance 조회
        if (query.cursor) {
          let cursorId: bigint;
          try {
            cursorId = BigInt(query.cursor);
          } catch {
            throw new BadRequestException('cursor는 BigInt 타입이어야 합니다.');
          }

          const cursorRow = await this.prisma.$queryRaw<Array<{ distance: number }>>`
    SELECT ST_Distance_Sphere(
             POINT(${lng}, ${lat}),
             POINT(e.longitude, e.latitude)
           ) AS distance
    FROM event e
    WHERE e.id = ${cursorId}
      AND e.latitude IS NOT NULL
      AND e.longitude IS NOT NULL
  `;

          if (!cursorRow.length) {
            throw new BadRequestException('유효하지 않은 cursor입니다.');
          }
          cursorDistance = cursorRow[0].distance;
        }

        const comparator = sortOrder === 'asc' ? Prisma.sql`>` : Prisma.sql`<`;

        // --- 조건 누적 ---
        const conditions: Prisma.Sql[] = [
          Prisma.sql`e.latitude IS NOT NULL`,
          Prisma.sql`e.longitude IS NOT NULL`,
        ];

        if (cursorDistance !== null) {
          conditions.push(
            Prisma.sql`ST_Distance_Sphere(POINT(${lng}, ${lat}), POINT(e.longitude, e.latitude)) ${comparator} ${cursorDistance}`,
          );
        }

        // 기간 필터
        if (query.startDate && query.endDate) {
          conditions.push(
            Prisma.sql`e.start_date <= ${new Date(query.endDate)}`,
            Prisma.sql`e.end_date >= ${new Date(query.startDate)}`,
          );
        } else if (query.startDate) {
          conditions.push(Prisma.sql`e.end_date >= ${new Date(query.startDate)}`);
        } else if (query.endDate) {
          conditions.push(Prisma.sql`e.start_date <= ${new Date(query.endDate)}`);
        }

        // 가격 필터
        if (typeof query.isFree === 'boolean') {
          if (query.isFree) conditions.push(Prisma.sql`e.price = 0`);
          else conditions.push(Prisma.sql`e.price <> 0`);
        }

        // 카테고리 필터 (OR 조건)
        if (query.categories?.length) {
          const categoryOr = query.categories.map((c) => Prisma.sql`e.category = ${c}`);

          conditions.push(Prisma.sql`(${Prisma.join(categoryOr, ' OR ')})`);
        }

        // 위치 키워드 필터
        if (query.locations?.length) {
          const likeConds = query.locations.map(
            (kw) =>
              Prisma.sql`(e.venue_name LIKE ${'%' + kw + '%'} OR e.venue_road_address LIKE ${'%' + kw + '%'} OR e.venue_jibun_address LIKE ${'%' + kw + '%'} OR e.venue_detail_address LIKE ${'%' + kw + '%'})`,
          );
          conditions.push(Prisma.sql`(${Prisma.join(likeConds, ' OR ')})`);
        }

        // 제목 검색 조건 추가
        if (query.search) {
          conditions.push(Prisma.sql`e.title LIKE ${'%' + query.search + '%'}`);
        }

        // onlyScrapped 필터를 Raw SQL에도 반영
        if (query.onlyScrapped && userId) {
          conditions.push(
            Prisma.sql`EXISTS(SELECT 1 FROM event_scrap s WHERE s.event_id = e.id AND s.user_id = ${userId})`,
          );
        }
        // --- 최종 쿼리 ---
        rows = await this.prisma.$queryRaw<
          Array<{
            id: bigint;
            title: string;
            startDate: Date;
            endDate: Date | null;
            price: number;
            category: string;
            latitude: number | null;
            longitude: number | null;
            distance: number;
          }>
        >`
    SELECT e.id,
           e.title,
           e.start_date AS startDate,
           e.end_date   AS endDate,
           e.price,
           e.category,
           e.latitude,
           e.longitude,
           e.region1,
           e.region2,
           ST_Distance_Sphere(
             POINT(${lng}, ${lat}),
             POINT(e.longitude, e.latitude)
           ) AS distance
    FROM event e
    WHERE ${Prisma.join(conditions, ' AND ')}
    ORDER BY distance ${Prisma.raw(sortOrder)}, e.id ${Prisma.raw(sortOrder)}
    LIMIT ${query.limit + 1}
  `;
        break;
      }
    }

    const hasNextPage = rows.length > query.limit;
    const sliced = hasNextPage ? rows.slice(0, query.limit) : rows;

    // 로그인 사용자의 찜 여부 계산 (현재 페이지에 한해)
    let scrappedIds = new Set<bigint>();
    const pageIds = sliced.map((r) => r.id);
    if (userId && pageIds.length) {
      const scraps = await this.prisma.eventScrap.findMany({
        where: { userId, eventId: { in: pageIds } },
        select: { eventId: true },
      });
      scrappedIds = new Set(scraps.map((s) => s.eventId));
    }

    // 썸네일 조회
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
    const events = sliced.map(
      (e: {
        id: bigint;
        title: string;
        startDate: Date;
        endDate: Date | null;
        price: number;
        category: string;
        latitude: number | null;
        longitude: number | null;
        region1?: string | null;
        region2?: string | null;
        distance?: number; // distance 정렬 시에만 나옴
      }) => ({
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
        latitude: e.latitude,
        longitude: e.longitude,
        region: [e.region1, e.region2].filter(Boolean).join('/'), // region1/region2 형식
        thumbnailUrl: firstThumbByEvent.get(e.id) ?? null,
        distance: e.distance ?? null, // 거리순일 때만 값이 들어옴
        isScrapped: userId ? scrappedIds.has(e.id) : false,
      }),
    );

    // 다음 커서 (거리순일 때는 distance + id 반환)
    const last = sliced.at(-1);
    const nextCursor = last ? last.id.toString() : null;
    const nextCursorDistance = last?.distance ?? null;

    return { events, nextCursor, nextCursorDistance, hasNextPage };
  }

  async getEventDetail(id: bigint, userId?: bigint): Promise<GetEventDetailResponseDto> {
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

    let isScrapped = false;
    if (userId) {
      const scrap = await this.prisma.eventScrap.findFirst({ where: { eventId: id, userId } });
      isScrapped = !!scrap; // scrap이 존재하면 true, 없으면 false로 저장
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
      latitude: event.latitude,
      longitude: event.longitude,
      createdAt: event.createdAt,
      updatedAt: event.updatedAt,
      images: event.eventImage.map((img) => ({
        imageUrl: process.env.CLOUDFRONT_URL + img.imageUrl, // TODO: 이미지 URL 저장 방식에 따라 수정이 필요(할 수도 있고 안 할 수도 있습니다)
        order: img.order,
      })),
      isScrapped,
    };
  }
}
