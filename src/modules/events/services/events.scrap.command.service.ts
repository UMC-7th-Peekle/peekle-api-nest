import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '@modules/prisma/prisma.service';

@Injectable()
export class EventsScrapService {
  constructor(private readonly prisma: PrismaService) {}

  // 이벤트 존재 여부 확인
  private async validateEventExists(eventId: bigint) {
    const event = await this.prisma.event.findUnique({ where: { id: eventId } });
    if (!event) throw new NotFoundException('존재하지 않는 이벤트입니다.');
    return event;
  }

  // 특정 유저의 스크랩 여부 조회
  private async getExistingScrap(userId: bigint, eventId: bigint) {
    return this.prisma.eventScrap.findUnique({
      where: { userId_eventId: { userId, eventId } },
    });
  }

  async scrapEvent(userId: bigint, eventId: bigint) {
    // 이벤트 존재 여부 확인
    await this.validateEventExists(eventId);

    // 이미 찜했는지 확인
    const existing = await this.getExistingScrap(userId, eventId);
    if (existing) throw new ConflictException('이미 찜한 이벤트입니다.');

    await this.prisma.eventScrap.create({
      data: { userId, eventId },
    });

    return { eventId: eventId.toString(), scrapped: true };
  }

  async unscrapEvent(userId: bigint, eventId: bigint) {
    // 이벤트 존재 여부 확인
    await this.validateEventExists(eventId);

    // 찜 기록이 없으면 에러
    const existing = await this.getExistingScrap(userId, eventId);
    if (!existing) throw new NotFoundException('찜하지 않은 이벤트입니다.');

    await this.prisma.eventScrap.delete({
      where: { userId_eventId: { userId, eventId } },
    });

    return { eventId: eventId.toString(), scrapped: false };
  }
}
