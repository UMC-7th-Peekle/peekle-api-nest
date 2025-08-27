// src/modules/events/dto/get-events.query.dto.ts
import { ApiPropertyOptional } from '@nestjs/swagger';

import { Type } from 'class-transformer';
import { IsEnum, IsInt, IsOptional, IsString, Max, Min } from 'class-validator';

export enum EventSortField {
  DATE = 'date',
}
export enum Order {
  ASC = 'asc',
  DESC = 'desc',
}

export class GetEventsQueryDto {
  @ApiPropertyOptional({ default: 20, maximum: 50 })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(50)
  limit = 20;

  @ApiPropertyOptional({ enum: EventSortField, default: EventSortField.DATE })
  @IsEnum(EventSortField)
  sort: EventSortField = EventSortField.DATE;

  @ApiPropertyOptional({ enum: Order, default: Order.ASC })
  @IsEnum(Order)
  order: Order = Order.ASC;

  /**
   * 무한 스크롤용: 마지막으로 본 항목의 기준
   *
   * 현재는 startDate + id 를 그대로 노출해서 커서로 사용 중.
   * - 클라이언트가 쿼리 파라미터(afterStart, afterId)를 직접 넣어줌
   * - 내부 정렬키/PK가 그대로 드러나고, 변조 위험이 있음
   *
   * TODO: opaque 커서(복합키+서명)로 리팩토링
   * - 서버가 마지막 항목의 키(startDate, id 등)를 직렬화 + HMAC 서명하여 문자열로 전달
   * - 클라 입장에서는 'cursor' 문자열만 주고받으면 되므로 내부 구조를 몰라도 됨
   * - 서버 내부 정렬/필터 전략이 바뀌어도 커서 포맷만 유지하면 하위호환 보장
   * - 위/변조 방지 가능 (잘못된 커서 → signature mismatch 에러)
   */
  @ApiPropertyOptional({ description: '마지막 항목의 startDate(YYYY-MM-DD)' })
  @IsOptional()
  @IsString()
  afterStart?: string;

  @ApiPropertyOptional({ description: '마지막 항목의 ID(BigInt string)' })
  @IsOptional()
  @IsString()
  afterId?: string;
}
