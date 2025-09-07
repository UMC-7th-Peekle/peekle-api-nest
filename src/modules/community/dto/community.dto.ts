import { ApiProperty } from '@nestjs/swagger';

import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

import { IsBigInt } from '@common/decorators/is-bigint.decorator';
import { TransformToBigint } from '@common/decorators/transform.decorator';

export class CreateCommunityDto {
  @ApiProperty({ example: '일반 커뮤니티', description: '커뮤니티명', maxLength: 100 })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name!: string;
}

export class GetCommunityDto {
  @ApiProperty({ example: '1', description: '커뮤니티 ID', type: String })
  @IsBigInt()
  @TransformToBigint()
  id!: bigint;

  @ApiProperty({ example: '일반 커뮤니티', description: '커뮤니티명', maxLength: 100 })
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty({ example: '2025-09-07T10:31:00.000Z', description: '생성일', type: String })
  @IsString()
  @IsNotEmpty()
  createdAt!: string;

  @ApiProperty({ example: '2025-09-07T10:31:00.000Z', description: '수정일', type: String })
  @IsString()
  @IsNotEmpty()
  updatedAt!: string;
}
