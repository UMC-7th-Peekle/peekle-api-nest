import { ApiProperty } from '@nestjs/swagger';

import { IsBigInt } from '@/common/decorators/is-bigint.decorator';
import { TransformToBigint } from '@/common/decorators/transform.decorator';

export class EventScrapParamDto {
  @ApiProperty({ description: '이벤트 ID', example: '123' })
  @IsBigInt()
  @TransformToBigint()
  eventId!: string;
}

export class EventScrapResponseDto {
  @ApiProperty({ description: '이벤트 ID', example: '123' })
  eventId!: string;

  @ApiProperty({ description: '사용자 ID', example: '1' })
  userId!: string;

  @ApiProperty({ description: '생성일시', example: '2025-09-05T10:00:00.000Z' })
  createdAt!: Date;

  @ApiProperty({ description: '수정일시', example: '2025-09-05T10:00:00.000Z' })
  updatedAt!: Date;
}
