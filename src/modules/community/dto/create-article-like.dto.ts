import { ApiProperty } from '@nestjs/swagger';

import { IsInt } from 'class-validator';

export class CreateArticleLikeDto {
  @ApiProperty({ example: 100, description: '좋아요를 누를 게시글 ID', type: Number })
  @IsInt()
  article_id!: number;

  @ApiProperty({ example: 42, description: '좋아요를 누른 사용자 ID', type: Number })
  @IsInt()
  user_id!: number;
}
