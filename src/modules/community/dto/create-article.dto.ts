import { ApiProperty } from '@nestjs/swagger';

import { IsBoolean, IsNotEmpty, IsString, MaxLength } from 'class-validator';

import { IsBigInt } from '@common/decorators/is-bigint.decorator';
import { TransformToBigint } from '@common/decorators/transform.decorator';

export class CreateArticleDto {
  @ApiProperty({ example: '1', description: '커뮤니티 ID', type: String })
  // TODO: IsBigInt 적용
  @IsBigInt()
  @TransformToBigint()
  community_id!: bigint;

  @ApiProperty({ example: '게시글 제목', description: '게시글 제목', maxLength: 50 })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  title!: string;

  @ApiProperty({ example: '게시글 내용', description: '게시글 내용', maxLength: 5000 })
  @IsString()
  @IsNotEmpty()
  @MaxLength(5000)
  content!: string;

  @ApiProperty({ example: false, description: '익명 여부', type: Boolean })
  @IsBoolean()
  is_anonymous!: boolean;

  @ApiProperty({ example: 123, description: '작성자 ID', type: String })
  author_id!: bigint;
}
