import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateCommunityDto {
  @ApiProperty({ example: '일반 커뮤니티', description: '커뮤니티명', maxLength: 100 })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name!: string;
}

export class GetCommunityDto {
  @ApiProperty({ example: '1', description: '커뮤니티 ID', type: String })
  id!: bigint;

  @ApiProperty({ example: '일반 커뮤니티', description: '커뮤니티명', maxLength: 100 })
  name!: string;

  @ApiProperty({ example: '2025-09-07T10:31:00.000Z', description: '생성일', type: String })
  createdAt!: string;

  @ApiProperty({ example: '2025-09-07T10:31:00.000Z', description: '수정일', type: String })
  updatedAt!: string;
}
