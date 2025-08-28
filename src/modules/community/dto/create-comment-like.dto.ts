import { ApiProperty } from '@nestjs/swagger';

import { IsInt } from 'class-validator';

export class CreateCommentLikeDto {
  @ApiProperty({ example: 55, description: '좋아요를 누를 댓글 ID', type: Number })
  @IsInt()
  comment_id!: number;

  @ApiProperty({ example: 42, description: '좋아요를 누른 사용자 ID', type: Number })
  @IsInt()
  user_id!: number;
}
