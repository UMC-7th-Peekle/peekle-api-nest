import { ApiPropertyOptional } from '@nestjs/swagger';

import { Transform, Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsArray,
  IsBoolean,
  IsDateString,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
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
  // query string에서 들어온 "true"/"false" 문자열을 실제 boolean 값으로 변환하기 위함
  // (class-transformer의 기본 Boolean 변환은 "false" 문자열도 truthy로 처리 → 항상 true가 되는 문제 방지)
  @Transform(({ value }) => {
    if (value === 'true' || value === true) return true;
    if (value === 'false' || value === false) return false;
    return undefined;
  })
  isFree?: boolean;

  // 위치 필터
  @ApiPropertyOptional({
    description: '활동 지역 리스트 (중복 선택 가능)',
    example: ['강남', '종로'],
    type: [String],
  })
  @IsOptional()
  // 단일 값이 들어와도 배열로 변환 (예: "강남" → ["강남"])
  @Transform(({ value }) => (Array.isArray(value) ? value : [value]))
  @IsArray()
  locations?: string[];

  // 카테고리 필터
  @ApiPropertyOptional({
    description: '카테고리 리스트 (중복 선택 가능)',
    example: ['교육', '문화'],
    type: [String],
  })
  @IsOptional()
  @IsArray()
  // 단일 값이 들어와도 배열로 변환 (예: "교육" → ["교육"])
  @Transform(({ value }) => (Array.isArray(value) ? value : [value]))
  categories?: string[];

  @ApiPropertyOptional({ description: '현재 위치 위도', example: 37.5665 })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  latitude?: number;

  @ApiPropertyOptional({ description: '현재 위치 경도', example: 126.9754 })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  longitude?: number;

  @ApiPropertyOptional({
    description: '지역(시/도)',
    example: '서울',
    nullable: true,
    type: String,
  })
  @IsOptional()
  region1?: string | null;

  @ApiPropertyOptional({
    description: '지역(구/군)',
    example: '서초구',
    nullable: true,
    type: String,
  })
  @IsOptional()
  region2?: string | null;

  @ApiPropertyOptional({
    description: '내가 찜한 이벤트만 보기 (로그인 필요)',
    example: true,
  })
  @IsOptional()
  @Transform(({ value }) => value === 'true' || value === true)
  onlyScrapped?: boolean;

  @ApiPropertyOptional({
    description: '검색어 (제목 기준 검색)', // TODO: 추후 필요 시 설명이나 장소명 기준 전체 포함 검색으로 수정
    example: '요리',
  })
  @IsOptional()
  @IsString()
  @MaxLength(50)
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : undefined))
  search?: string;
}
