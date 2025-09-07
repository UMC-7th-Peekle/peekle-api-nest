import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '@modules/prisma/prisma.service';

@Injectable()
export class EventsScrapService {
  constructor(private readonly prisma: PrismaService) {}

  async scrapEvent(userId: bigint, eventId: bigint) {
    // 이벤트 존재 여부 확인
    const event = await this.prisma.event.findUnique({ where: { id: eventId } });
    if (!event) throw new NotFoundException('Event not found');

    await this.prisma.eventScrap.create({
      data: { userId, eventId },
    });

    return { eventId: eventId.toString(), scrapped: true };
  }

  async unscrapEvent(userId: bigint, eventId: bigint) {
    // 이벤트 존재 여부 확인
    const event = await this.prisma.event.findUnique({ where: { id: eventId } });
    if (!event) throw new NotFoundException('Event not found');

    await this.prisma.eventScrap.delete({
      where: { userId_eventId: { userId, eventId } },
    });

    return { eventId: eventId.toString(), scrapped: false };
  }
}
