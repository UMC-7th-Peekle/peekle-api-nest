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

  // DTO의 날짜 필드는 class-validator @IsDateString 때문에 string(예: '2025-09-01')으로 들어올 수 있음
  // 하지만 Prisma의 DateTime 컬럼에 저장하려면 반드시 Date 객체여야 하므로
  // string 타입일 경우 new Date(...)로 변환하고, 이미 Date 타입이면 그대로 반환
  private toDate(v: string | Date): Date {
    return typeof v === 'string' ? new Date(v) : v;
  }

  // TODO: 이미지 업로드는 나중에 추가 (지금은 이미지 저장 로직 제외, 추후 DB 저장 로직 구현 후)
  async createEvent(authorId: bigint, dto: CreateEventDto) {
    const user = await this.prisma.user.findUnique({
      where: { id: authorId },
      select: { role: true },
    });
    if (!user) throw new NotFoundException('사용자가 존재하지 않습니다.');
    if (user.role !== USER_ROLES.ADMIN) {
      throw new ForbiddenException('관리자만 이벤트를 생성할 수 있습니다.');
    }

    const start = this.toDate(dto.startDate);
    const end = this.toDate(dto.endDate);

    if (end < start) {
      throw new BadRequestException('종료일은 시작일보다 빠를 수 없습니다.');
    }

    const event = await this.prisma.event.create({
      data: {
        title: dto.title,
        startDate: start,
        endDate: end,
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

    // 이미지 저장 (있을 경우)
    if (dto.images?.length) {
      await this.prisma.eventImage.createMany({
        data: dto.images.map((url, imageIndex) => ({
          eventId: event.id,
          imageUrl: url,
          order: imageIndex,
        })),
      });
    }

    return { id: event.id.toString() };
  }

  // TODO: 이미지 수정 및 삭제는 나중에 추가 (지금은 이미지 저장 로직 제외, 추후 DB 저장 로직 구현 후)
  async updateEvent(id: bigint, userId: bigint, dto: UpdateEventDto) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { role: true },
    });
    if (!user) throw new NotFoundException('사용자가 존재하지 않습니다.');
    if (user.role !== USER_ROLES.ADMIN) {
      throw new ForbiddenException('관리자만 이벤트를 수정할 수 있습니다.');
    }

    const found = await this.prisma.event.findUnique({ where: { id } });
    if (!found) throw new NotFoundException('이벤트가 존재하지 않습니다.');

    // 값이 안 들어오면 기존 DB에 있던 날짜(found.startDate / found.endDate)를 유지
    const start = dto.startDate !== undefined ? this.toDate(dto.startDate) : found.startDate;
    const end = dto.endDate !== undefined ? this.toDate(dto.endDate) : found.endDate;

    if (end < start) {
      throw new BadRequestException('종료일은 시작일보다 빠를 수 없습니다.');
    }

    const updated = await this.prisma.event.update({
      where: { id },
      data: {
        title: dto.title,
        startDate: start,
        endDate: end,
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

    // 이미지 갱신 (있을 경우)
    // (1) dto.images === undefined (전송하지 않음)
    //     - 기존 이미지 유지
    //     - event_image 테이블에는 변경 없음
    //
    // (2) dto.images === [] (빈 배열)
    //     - 기존 이미지 전부 삭제
    //     - 결과적으로 이미지가 없는 상태로 갱신됨
    //
    // (3) dto.images === ['...'] (URL 배열 전달)
    //     - 기존 이미지 전부 삭제 후, 새 배열대로 다시 저장
    //     - order 컬럼은 배열의 순서(index)를 기준으로 설정
    if (dto.images !== undefined) {
      // 기존 이미지 모두 삭제
      await this.prisma.eventImage.deleteMany({ where: { eventId: id } });

      // 새 배열 전달 시에만 다시 생성
      if (dto.images.length > 0) {
        await this.prisma.eventImage.createMany({
          data: dto.images.map((url, imageIndex) => ({
            eventId: id,
            imageUrl: url,
            order: imageIndex,
          })),
        });
      }
    }

    return { id: updated.id.toString() };
  }

  async deleteEvent(id: bigint, userId: bigint) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { role: true },
    });
    if (!user) throw new NotFoundException('사용자가 존재하지 않습니다.');
    if (user.role !== USER_ROLES.ADMIN) {
      throw new ForbiddenException('관리자만 이벤트를 삭제할 수 있습니다.');
    }

    const found = await this.prisma.event.findUnique({ where: { id } });
    if (!found) throw new NotFoundException('이벤트가 존재하지 않습니다.');

    await this.prisma.event.delete({ where: { id } });
    return { id: id.toString() };
  }
}
