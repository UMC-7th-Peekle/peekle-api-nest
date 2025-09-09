// src/modules/events/services/events.scrap.query.service.ts
import { BadRequestException, Injectable } from '@nestjs/common';

import { Order } from '@modules/events/dto/get-events.dto';
import { GetMyScrappedEventsQueryDto } from '@modules/events/dto/get-scrapped-events.dto';
import { PrismaService } from '@modules/prisma/prisma.service';

@Injectable()
export class EventsScrapQueryService {
  constructor(private readonly prisma: PrismaService) {}

  async getMyScrappedList(userId: bigint, query: GetMyScrappedEventsQueryDto) {
    const sortOrder: 'asc' | 'desc' = query.order === Order.ASC ? 'asc' : 'desc';

    const where: { userId: bigint; eventId?: { gt?: bigint; lt?: bigint } } = { userId };
    if (query.cursor) {
      let cursor: bigint;
      try {
        cursor = BigInt(query.cursor);
      } catch {
        throw new BadRequestException('Invalid cursor');
      }
      where.eventId = sortOrder === 'asc' ? { gt: cursor } : { lt: cursor };
    }

    // 찜한 행 + 이벤트 요약 함께 조회 (limit+1)
    const rows = await this.prisma.eventScrap.findMany({
      where,
      orderBy: { eventId: sortOrder },
      take: query.limit + 1,
      include: {
        event: {
          select: {
            id: true,
            title: true,
            startDate: true,
            endDate: true,
            price: true,
            category: true,
          },
        },
      },
    });

    const hasNextPage = rows.length > query.limit;
    const sliced = hasNextPage ? rows.slice(0, query.limit) : rows;

    // 썸네일(각 이벤트 첫 장) 일괄 조회
    const ids = sliced.map((r) => r.event.id);
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

    // 응답 매핑 (이벤트 목록 조회 포맷과 동일)
    //event 테이블이 아니라 eventScrap 테이블에서 꺼낸 event라 구조 분해 필요
    const events = sliced.map(({ event }) => ({
      id: event.id.toString(),
      title: event.title,
      period: {
        start: event.startDate.toISOString().slice(0, 10),
        end: event.endDate ? event.endDate.toISOString().slice(0, 10) : null,
      },
      price: {
        amount: event.price,
        type: event.price === 0 ? 'FREE' : 'PAID',
        currency: 'KRW',
      },
      category: event.category,
      thumbnailUrl: firstThumbByEvent.get(event.id) ?? null,
      isScrapped: true,
    }));

    // 다음 커서: 현재 페이지의 마지막 아이템 id
    const last = sliced.at(-1);
    const nextCursor = last ? last.eventId.toString() : null;

    return { events, nextCursor, hasNextPage };
  }
}
