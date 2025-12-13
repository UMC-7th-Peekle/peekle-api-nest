import { ApiProperty } from '@nestjs/swagger';

import { GetArticleDto } from '@modules/community/dto/article.dto';

export class FilterArticleDto {
  @ApiProperty({ type: [GetArticleDto], description: '필터링된 게시글 목록' })
  articles!: GetArticleDto[];

  @ApiProperty({ example: 42, description: '필터링된 게시글 총 개수', type: Number })
  totalCount!: number;

  @ApiProperty({ example: 1, description: '현재 페이지 번호', type: Number })
  currentPage!: number;

  @ApiProperty({ example: 10, description: '페이지당 게시글 개수', type: Number })
  pageSize!: number;

  @ApiProperty({ example: 5, description: '총 페이지 수', type: Number })
  totalPages!: number;

  @ApiProperty({ example: true, description: '다음 페이지 존재 여부', type: Boolean })
  hasNextPage!: boolean;

  @ApiProperty({ example: false, description: '이전 페이지 존재 여부', type: Boolean })
  hasPreviousPage!: boolean;
}
