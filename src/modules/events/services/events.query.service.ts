import { BadRequestException, Injectable } from '@nestjs/common';

import { GetEventsQueryDto, Order } from '@modules/events/dto/get-events.dto';
import { PrismaService } from '@modules/prisma/prisma.service';

@Injectable()
export class EventsQueryService {
  constructor(private readonly prisma: PrismaService) {}

  async getEventsList(query: GetEventsQueryDto) {
    const sortOrder = query.order === Order.ASC ? 'asc' : 'desc';
    const cursor =
      query.afterStart || query.afterId
        ? (() => {
            if (!query.afterStart || !query.afterId) {
              throw new BadRequestException('afterStart and afterId must be provided together');
            }
            const d = new Date(query.afterStart);
            if (isNaN(d.getTime())) throw new BadRequestException('Invalid afterStart');

            let id: bigint;
            try {
              id = BigInt(query.afterId);
            } catch {
              throw new BadRequestException('Invalid afterId');
            }
            return { date: d, id };
          })()
        : null;
    // --------- where: 커서 이후/이전만 조회 ---------
    // ASC:  (startDate > D) OR (startDate == D AND id > I)
    // DESC: (startDate < D) OR (startDate == D AND id < I)
    const where: any = {};
    if (cursor) {
      if (query.order === Order.ASC) {
        // ASC:  (startDate > D) OR (startDate == D AND id > I)
        where.OR = [
          { startDate: { gt: cursor.date } },
          { startDate: cursor.date, id: { gt: cursor.id } },
        ];
      } else {
        // DESC: (startDate < D) OR (startDate == D AND id < I)
        where.OR = [
          { startDate: { lt: cursor.date } },
          { startDate: cursor.date, id: { lt: cursor.id } },
        ];
      }
    }

    // 필터는 이 아래 where에 누적해서 추가

    const rows = await this.prisma.event.findMany({
      where,
      orderBy: [{ startDate: sortOrder }, { id: sortOrder }],
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

    const hasNext = rows.length > query.limit;
    const sliced = hasNext ? rows.slice(0, query.limit) : rows;

    // 썸네일 일괄 조회: 각 이벤트의 order가 가장 낮은 1장
    const ids = sliced.map((r) => r.id);
    let firstThumbByEvent = new Map<bigint, string>();

    if (ids.length) {
      const thumbs = await this.prisma.eventImage.findMany({
        where: { eventId: { in: ids } },
        orderBy: [{ eventId: 'asc' }, { order: 'asc' }],
        select: { eventId: true, imageUrl: true, order: true },
      });

      firstThumbByEvent = thumbs.reduce((acc, t) => {
        if (!acc.has(t.eventId)) acc.set(t.eventId, t.imageUrl);
        return acc;
      }, new Map<bigint, string>());
    }

    // 응답 매핑
    const items = sliced.map((e) => ({
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

    // 다음 요청용 커서
    const last = sliced.at(-1);
    const next = last
      ? {
          afterStart: last.startDate.toISOString().slice(0, 10),
          afterId: last.id.toString(),
        }
      : null;

    return { items, pageInfo: { hasNext, next } };
  }
}
