// src/modules/events/services/events.command.service.ts
import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { USER_ROLES } from '@common/constants/user-role.constants';

import { CreateEventDto } from '@modules/events/dto/create-event.dto';
import { UpdateEventDto } from '@modules/events/dto/update-event.dto';
import { PrismaService } from '@modules/prisma/prisma.service';

@Injectable()
export class EventsCommandService {
  constructor(private readonly prisma: PrismaService) {}

  // TODO: 이미지 업로드는 나중에 추가 (지금은 이미지 저장 로직 제외, 추후 DB 저장 로직 구현 후)
  async createEvent(authorId: bigint, dto: CreateEventDto) {
    const user = await this.prisma.user.findUnique({
      where: { id: authorId },
      select: { role: true },
    });
    if (!user) throw new NotFoundException('User not found');
    if (user.role !== USER_ROLES.ADMIN) {
      throw new ForbiddenException('Only admins can create events');
    }

    if (dto.endDate && dto.endDate < dto.startDate) {
      throw new BadRequestException('endDate must be on/after startDate');
    }

    const event = await this.prisma.event.create({
      data: {
        title: dto.title,
        startDate: dto.startDate,
        endDate: dto.endDate,
        venueName: dto.venueName,
        venueRoadAddress: dto.venueRoadAddress,
        venueJibunAddress: dto.venueJibunAddress,
        venueDetailAddress: dto.venueDetailAddress,
        price: dto.price,
        link: dto.link ?? null,
        description: dto.description ?? null,
        authorId,
        category: dto.category,
      },
    });

    return { id: event.id.toString() };
  }

  // TODO: 이미지 수정 및 삭제는 나중에 추가 (지금은 이미지 저장 로직 제외, 추후 DB 저장 로직 구현 후)
  async updateEvent(id: bigint, userId: bigint, dto: UpdateEventDto) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { role: true },
    });
    if (!user) throw new NotFoundException('User not found');
    if (user.role !== USER_ROLES.ADMIN) {
      throw new ForbiddenException('Only admins can update events');
    }

    if (dto.startDate && dto.endDate && dto.endDate < dto.startDate) {
      throw new BadRequestException('endDate must be on/after startDate');
    }

    const found = await this.prisma.event.findUnique({ where: { id } });
    if (!found) throw new NotFoundException('Event not found');

    const updated = await this.prisma.event.update({
      where: { id },
      data: {
        title: dto.title,
        startDate: dto.startDate,
        endDate: dto.endDate,
        venueName: dto.venueName,
        venueRoadAddress: dto.venueRoadAddress,
        venueJibunAddress: dto.venueJibunAddress,
        venueDetailAddress: dto.venueDetailAddress,
        price: dto.price,
        link: dto.link ?? null,
        description: dto.description ?? null,
        category: dto.category,
      },
      select: { id: true },
    });

    return { id: updated.id.toString() };
  }

  async deleteEvent(id: bigint, userId: bigint) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { role: true },
    });
    if (!user) throw new NotFoundException('User not found');
    if (user.role !== USER_ROLES.ADMIN) {
      throw new ForbiddenException('Only admins can delete events');
    }

    const found = await this.prisma.event.findUnique({ where: { id } });
    if (!found) throw new NotFoundException('Event not found');

    await this.prisma.event.delete({ where: { id } });
    return { id: id.toString() };
  }
}
