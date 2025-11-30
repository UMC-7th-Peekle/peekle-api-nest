import { ApiProperty } from '@nestjs/swagger';

import { IsDateString, IsInt, IsOptional, IsString, MaxLength } from 'class-validator';

// Done: @IsBigInt() 올라오면 적용. 아래 @IsBigInt(), @TransformToBigint() 주석도 해제
import { IsBigInt } from '@common/decorators/is-bigint.decorator';
import { TransformToBigint } from '@common/decorators/transform.decorator';

export class GetEventDetailParamsDto {
  @ApiProperty({
    description: '이벤트 ID',
    example: '1',
  })
  @IsBigInt()
  @TransformToBigint()
  id!: bigint;
}

// 이미지 한 장
export class EventImageItemDto {
  @ApiProperty({ description: '이미지 URL', example: 'https://cdn.example.com/xxx.png' })
  @IsString()
  @MaxLength(1024)
  imageUrl!: string;

  @ApiProperty({ description: '노출 순서', example: 1 })
  @IsInt()
  order!: number;
}

export class GetEventDetailResponseDto {
  @ApiProperty({ description: '이벤트 ID (BigInt string)', example: '123' })
  id!: string;

  @ApiProperty({ description: '제목', example: '주말 플리마켓' })
  @IsString()
  @MaxLength(50)
  title!: string;

  @ApiProperty({ description: '시작일(YYYY-MM-DD)', example: '2025-09-01' })
  @IsDateString()
  startDate!: Date;

  @ApiProperty({ description: '종료일(YYYY-MM-DD)', example: '2025-09-02', nullable: true })
  @IsOptional()
  @IsDateString()
  endDate?: Date | null;

  @ApiProperty({ description: '장소명', nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  venueName?: string | null;

  @ApiProperty({ description: '도로명 주소', nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(200)
  venueRoadAddress?: string | null;

  @ApiProperty({
    description: '지번 주소',
    nullable: true,
  })
  @IsOptional()
  @IsString()
  @MaxLength(200)
  venueJibunAddress?: string | null;

  @ApiProperty({ description: '상세 주소', nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  venueDetailAddress?: string | null;

  @ApiProperty({ description: '가격(원)', example: 0 })
  @IsInt()
  price!: number;

  @ApiProperty({ description: '외부 링크', example: 'https://example.com/apply', nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(300)
  link?: string | null;

  @ApiProperty({ description: '설명', example: '플리마켓 참가자 모집합니다.', nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(1000)
  description?: string | null;

  @ApiProperty({ description: '작성자 ID (BigInt string)' })
  authorId!: string;

  @ApiProperty({ description: '카테고리', example: '문화' })
  @IsString()
  @MaxLength(100)
  category!: string;

  @ApiProperty({ description: '생성일시', example: '2025-08-28T09:30:00.000Z' })
  createdAt!: Date;

  @ApiProperty({ description: '수정일시', example: '2025-08-28T09:30:00.000Z' })
  updatedAt!: Date;

  @ApiProperty({
    description: '이미지 목록(썸네일 포함 노출 순서)',
    type: [EventImageItemDto],
    example: [
      { imageUrl: 'https://cdn.example.com/1.png', order: 1 },
      { imageUrl: 'https://cdn.example.com/2.png', order: 2 },
    ],
  })
  images!: EventImageItemDto[];

  @ApiProperty({ description: '위도', example: 37.5649, nullable: true })
  latitude?: number | null;

  @ApiProperty({ description: '경도', example: 126.9754, nullable: true })
  longitude?: number | null;

  @ApiProperty({
    description: '현재 로그인한 사용자가 이 이벤트를 찜했는지 여부',
    example: false,
  })
  isScrapped!: boolean;
}
