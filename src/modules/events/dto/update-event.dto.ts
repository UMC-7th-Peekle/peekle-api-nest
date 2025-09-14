import { PartialType } from '@nestjs/swagger';

import { CreateEventDto } from '@modules/events/dto/create-event.dto';

// PartialType은 기존 DTO의 모든 필드를 optional로 변환해주는 유틸리티입니다.
export class UpdateEventDto extends PartialType(CreateEventDto) {}
