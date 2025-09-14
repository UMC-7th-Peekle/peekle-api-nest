import { ApiProperty } from '@nestjs/swagger';

import { IsBigInt } from '@common/decorators/is-bigint.decorator';
import { TransformToBigint } from '@common/decorators/transform.decorator';

export class CreateCommentLikeDto {
  @ApiProperty({ example: 55, description: '좋아요를 누를 댓글 ID', type: Number })
  @IsBigInt()
  @TransformToBigint()
  commentId!: bigint;
}
