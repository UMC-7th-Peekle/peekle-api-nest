import { ApiPropertyOptional } from '@nestjs/swagger';

import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsArray,
  IsDateString,
  IsEnum,
  IsInt,
  IsOptional,
  Max,
  Min,
} from 'class-validator';

import { IsBigInt } from '@common/decorators/is-bigint.decorator';
import { TransformToBigint } from '@common/decorators/transform.decorator';

export enum EventSortField {
  DATE = 'date', // 가까운 날짜순
  PRICE = 'price', // 낮은 금액순
  DISTANCE = 'distance', // 가까운 거리순
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

  @ApiPropertyOptional({ enum: EventSortField, default: EventSortField.DATE })
  @IsEnum(EventSortField)
  sort: EventSortField = EventSortField.DATE;

  @ApiPropertyOptional({ enum: Order, default: Order.ASC })
  @IsEnum(Order)
  order: Order = Order.ASC;

  @ApiPropertyOptional({
    description: '마지막으로 본 이벤트 id (BigInt string)',
    example: '1',
    type: 'string',
  })
  @IsOptional()
  @IsBigInt()
  @TransformToBigint()
  cursor?: bigint;

  // 기간 필터
  @ApiPropertyOptional({ description: '시작일 (YYYY-MM-DD)', example: '2025-09-01' })
  @IsOptional()
  @IsDateString()
  startDate?: string;

  @ApiPropertyOptional({ description: '종료일 (YYYY-MM-DD)', example: '2025-09-30' })
  @IsOptional()
  @IsDateString()
  endDate?: string;

  // 가격 필터
  @ApiPropertyOptional({ description: '무료 여부 (true면 무료만, false면 유료만)', example: true })
  @IsOptional()
  isFree?: boolean;

  // 위치 필터
  @ApiPropertyOptional({
    description: '활동 지역 리스트 (중복 선택 가능)',
    example: ['강남/서초/잠실', '종로/중구/용산'],
    type: [String],
  })
  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  locations?: string[];

  // 카테고리 필터
  @ApiPropertyOptional({
    description: '카테고리 리스트 (중복 선택 가능)',
    example: ['교육', '문화'],
    type: [String],
  })
  @IsOptional()
  @IsArray()
  categories?: string[];
}
