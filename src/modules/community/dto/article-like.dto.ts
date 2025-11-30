import { ApiProperty } from '@nestjs/swagger';

import { IsBigInt } from '@common/decorators/is-bigint.decorator';
import { TransformToBigint } from '@common/decorators/transform.decorator';

export class CreateArticleLikeDto {
  @ApiProperty({ example: 100, description: '좋아요를 누를 게시글 ID', type: Number })
  @IsBigInt()
  @TransformToBigint()
  articleId!: bigint;

  @ApiProperty({ example: 5001, description: '좋아요를 누른 사용자 ID', type: Number })
  @IsBigInt()
  @TransformToBigint()
  userId!: bigint;

  @ApiProperty({ example: '2023-10-05T12:34:56Z', description: '좋아요 생성 일시', type: String })
  createdAt!: Date;

  @ApiProperty({ example: '2023-10-05T12:34:56Z', description: '좋아요 수정 일시', type: String })
  updatedAt!: Date;
}
