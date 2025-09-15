import { ApiProperty } from '@nestjs/swagger';

import { IsBigInt } from '@common/decorators/is-bigint.decorator';
import { TransformToBigint } from '@common/decorators/transform.decorator';

export class CreateArticleLikeDto {
  @ApiProperty({ example: 100, description: '좋아요를 누를 게시글 ID', type: Number })
  @IsBigInt()
  @TransformToBigint()
  articleId!: bigint;
}
