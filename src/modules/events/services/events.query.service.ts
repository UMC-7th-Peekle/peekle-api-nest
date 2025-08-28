import { BadRequestException, Injectable } from '@nestjs/common';

import { Prisma } from '@peekle/prisma/client';

import { GetEventsQueryDto, Order } from '@modules/events/dto/get-events.dto';
import { PrismaService } from '@modules/prisma/prisma.service';

@Injectable()
export class EventsQueryService {
  constructor(private readonly prisma: PrismaService) {}

  async getEventsList(query: GetEventsQueryDto) {
    const sortOrder: 'asc' | 'desc' = query.order === Order.ASC ? 'asc' : 'desc';

    const where: Prisma.EventWhereInput = {};
    if (query.cursor) {
      let cursorId: bigint;
      try {
        cursorId = BigInt(query.cursor);
      } catch {
        throw new BadRequestException('Invalid cursor');
      }
      // asc면 커서보다 큰 id가 다음 페이지, desc면 작은 id가 다음 페이지
      where.id = sortOrder === 'asc' ? { gt: cursorId } : { lt: cursorId };
    }

    // 조회: id asc/desc, limit+1
    const rows = await this.prisma.event.findMany({
      where,
      orderBy: [{ id: sortOrder }],
      take: query.limit + 1, // hasNext 판별 위해 +1
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

    // 썸네일(각 이벤트 첫 장) 일괄 조회
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

    //  다음 커서: 현재 페이지의 마지막 아이템 id(asc/desc 모두 동일)
    const last = sliced.at(-1);
    const nextCursor = last ? last.id.toString() : null;

    return { events, nextCursor, hasNextPage };
  }
}
