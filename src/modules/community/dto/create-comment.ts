import { ApiProperty } from '@nestjs/swagger';

import { IsBoolean, IsInt, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateCommentDto {
  @ApiProperty({ example: 100, description: '댓글이 달릴 게시글 ID', type: Number })
  @IsInt()
  article_id!: number;

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
  is_anonymous!: boolean;
}
