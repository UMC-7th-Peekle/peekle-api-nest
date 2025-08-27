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
  @ApiPropertyOptional({ type: Number, default: 20, minimum: 1, maximum: 50 })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(50)
  limit: number = 20;

  /**
   * id DESC 기반 커서 페이지네이션
   * - 첫 페이지: cursor 없음
   * - 다음 페이지: 응답의 pageInfo.nextCursor 그대로 전달
   */

  @ApiPropertyOptional({ enum: EventSortField, default: EventSortField.DATE })
  @IsEnum(EventSortField)
  sort: EventSortField = EventSortField.DATE;

  @ApiPropertyOptional({ enum: Order, default: Order.ASC })
  @IsEnum(Order)
  order: Order = Order.ASC;

  @ApiPropertyOptional({ description: '마지막으로 본 이벤트 id(BigInt string)' })
  @IsOptional()
  @IsString()
  cursor?: string;
}
