import { ApiProperty } from '@nestjs/swagger';

import { IsBoolean, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

import { IsBigInt } from '@common/decorators/is-bigint.decorator';
import { TransformToBigint } from '@common/decorators/transform.decorator';

export class CreateCommentDto {
  @ApiProperty({ example: 100, description: '댓글이 달릴 게시글 ID', type: String })
  @IsBigInt()
  @TransformToBigint()
  articleId!: string;

  @ApiProperty({ example: '댓글 내용', description: '댓글 본문', maxLength: 2000 })
  @IsString()
  @IsNotEmpty()
  @MaxLength(2000)
  content!: string;

  @ApiProperty({ example: false, description: '익명 여부', type: Boolean })
  @IsBoolean()
  isAnonymous!: boolean;

  @ApiProperty({
    example: 20,
    description: '부모 댓글 ID (대댓글 작성 시)',
    type: Number,
    required: false,
  })
  @IsBigInt()
  @TransformToBigint()
  @IsOptional()
  parentCommentId?: string;
}

export class GetCommentDto {
  @ApiProperty({ example: 1, description: '댓글 ID', type: String })
  @IsBigInt()
  @TransformToBigint()
  id!: string;

  @ApiProperty({ example: 100, description: '게시글 ID', type: String })
  @IsBigInt()
  @TransformToBigint()
  articleId!: string;

  @ApiProperty({ example: '댓글 내용', description: '댓글 본문', maxLength: 2000 })
  @IsString()
  @IsNotEmpty()
  content!: string;

  @ApiProperty({ example: 5001, description: '작성자 ID', type: String })
  @IsBigInt()
  @TransformToBigint()
  authorId!: string;

  @ApiProperty({ example: false, description: '익명 여부', type: Boolean })
  @IsBoolean()
  isAnonymous!: boolean;

  @ApiProperty({ example: '2025-09-07T10:31:00.000Z', description: '작성일', type: String })
  @IsString()
  @IsNotEmpty()
  createdAt!: string;

  @ApiProperty({ example: '2025-09-07T10:31:00.000Z', description: '수정일', type: String })
  @IsString()
  @IsNotEmpty()
  updatedAt!: string;
}
