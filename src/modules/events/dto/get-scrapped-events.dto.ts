import { ApiPropertyOptional } from '@nestjs/swagger';

import { Type } from 'class-transformer';
import { IsEnum, IsInt, IsOptional, Max, Min } from 'class-validator';

import { IsBigInt } from '@common/decorators/is-bigint.decorator';
import { TransformToBigint } from '@common/decorators/transform.decorator';

import { Order } from '@modules/events/dto/get-events.dto';

// get-events.dto.ts의 GetEventsQueryDto 바탕으로 작성
export class GetMyScrappedEventsQueryDto {
  @ApiPropertyOptional({ type: Number, default: 20, minimum: 1, maximum: 50 })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(50)
  limit: number = 20;

  @ApiPropertyOptional({ enum: Order, default: Order.DESC })
  @IsEnum(Order)
  order: Order = Order.DESC;

  @ApiPropertyOptional({
    description: '마지막으로 본 스크랩 eventId (커서)',
    example: '1',
    type: 'string',
  })
  @IsOptional()
  @IsBigInt()
  @TransformToBigint()
  cursor?: bigint;
}
