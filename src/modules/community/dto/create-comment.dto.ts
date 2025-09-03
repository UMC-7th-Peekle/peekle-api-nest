import { ApiProperty } from '@nestjs/swagger';

import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateCommentDto {
  @ApiProperty({ example: 100, description: '댓글이 달릴 게시글 ID', type: Number })
  @IsInt()
  articleId!: number;

  @ApiProperty({ example: '댓글 내용', description: '댓글 본문', maxLength: 2000 })
  @IsString()
  @IsNotEmpty()
  @MaxLength(2000)
  content!: string;

  @ApiProperty({ example: 123, description: '작성자 ID', type: Number })
  @IsInt()
  author_id!: number;

  @ApiProperty({ example: false, description: '익명 여부', type: Boolean })
  @IsBoolean()
  isAnonymous!: boolean;

  @ApiProperty({
    example: 20,
    description: '부모 댓글 ID (대댓글 작성 시)',
    type: Number,
    required: false,
  })
  @IsInt()
  @IsOptional()
  parentCommentId?: number;
}
