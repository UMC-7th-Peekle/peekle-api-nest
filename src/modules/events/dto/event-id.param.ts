// src/modules/events/dto/event-id.param.ts
import { ApiProperty } from '@nestjs/swagger';

import { IsBigInt } from '@common/decorators/is-bigint.decorator';
import { TransformToBigint } from '@common/decorators/transform.decorator';

export class EventIdParamDto {
  @ApiProperty({ example: '123' })
  @IsBigInt()
  @TransformToBigint()
  id!: string;
}
