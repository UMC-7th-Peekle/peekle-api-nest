import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import {
  IsDateString,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateEventDto {
  @ApiProperty({
    description: '카테고리',
    example: '교육',
    default: '교육',
  })
  @IsString()
  @MaxLength(100)
  category!: string;

  @ApiProperty({
    description: '제목',
    example: '주말 플리마켓',
    maxLength: 50,
  })
  @IsString()
  @MaxLength(50)
  title!: string;

  @ApiProperty({
    description: '시작일(YYYY-MM-DD)',
    example: '2025-09-01',
    default: () => new Date().toISOString().slice(0, 10),
  })
  @IsDateString()
  startDate!: string;

  @ApiProperty({
    description: '종료일(YYYY-MM-DD)',
    example: '2025-09-02',
    default: () => new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
  })
  @IsDateString()
  endDate!: string;

  @ApiPropertyOptional({
    description: '장소명',
    example: '중앙대학교',
    nullable: true,
  })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  venueName?: string | null;

  @ApiPropertyOptional({
    description: '도로명 주소',
    example: '서울 동작구 흑석로 84',
    nullable: true,
  })
  @IsOptional()
  @IsString()
  @MaxLength(200)
  venueRoadAddress?: string | null;

  @ApiPropertyOptional({
    description: '지번 주소',
    example: '서울 동작구 흑석동 251-1',
    nullable: true,
  })
  @IsOptional()
  @IsString()
  @MaxLength(200)
  venueJibunAddress?: string | null;

  @ApiPropertyOptional({
    description: '상세 주소',
    example: '중앙대학교 310관',
    nullable: true,
  })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  venueDetailAddress?: string | null;

  @ApiProperty({
    description: '가격(원)',
    example: 0,
    default: 0,
    maximum: 1000000,
  })
  @IsInt()
  @Min(0)
  price!: number;

  @ApiPropertyOptional({
    description: '외부 링크',
    example: 'https://example.com/apply',
    maxLength: 300,
    nullable: true,
  })
  @IsOptional()
  @IsString()
  @MaxLength(300)
  link?: string | null;

  @ApiPropertyOptional({
    description: '설명',
    example: '플리마켓 참가자 모집합니다.',
    maxLength: 1000,
    nullable: true,
  })
  @IsOptional()
  @IsString()
  @MaxLength(1000)
  description?: string | null;

  @ApiPropertyOptional({
    description: '이미지 URL 배열 (최대 10장)',
    example: ['https://peekle.kr/1.png', 'https://peekle.kr/2.png'],
    maxItems: 10,
  })
  @IsOptional()
  @IsString({ each: true })
  @MaxLength(1024, { each: true })
  images?: string[];

  @ApiPropertyOptional({
    description: '위도',
    example: 37.5665,
    nullable: true,
  })
  @IsOptional()
  @IsNumber()
  latitude?: number | null;

  @ApiPropertyOptional({
    description: '경도',
    example: 126.9754,
    nullable: true,
  })
  @IsOptional()
  @IsNumber()
  longitude?: number | null;
}
