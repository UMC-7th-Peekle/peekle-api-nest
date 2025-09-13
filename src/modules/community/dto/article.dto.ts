import { ApiProperty } from '@nestjs/swagger';

import { IsBoolean, IsNotEmpty, IsString, MaxLength } from 'class-validator';

import { IsBigInt } from '@common/decorators/is-bigint.decorator';
import { TransformToBigint } from '@common/decorators/transform.decorator';

export class CreateArticleDto {
  @ApiProperty({ example: '1', description: '커뮤니티 ID', type: String })
  @IsBigInt()
  @TransformToBigint()
  communityId!: bigint;

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
  isAnonymous!: boolean;
}

// 게시글 이미지 항목 DTO
export class ArticleImagesDto {
  @ApiProperty({ example: '/article_images/filename.jpg', description: '이미지 URL' })
  imageUrl!: string;

  @ApiProperty({ example: 1, description: '순서' })
  order!: number;
}

export class GetArticleDto {
  @ApiProperty({ example: '1', description: '게시글 ID', type: String })
  @IsBigInt()
  @TransformToBigint()
  id!: string;

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
  isAnonymous!: boolean;

  @ApiProperty({ example: '2', description: '작성자 ID', type: String })
  @IsBigInt()
  @TransformToBigint()
  authorId!: string;

  @ApiProperty({ example: '2025-09-07T10:31:00.000Z', description: '작성일', type: String })
  createdAt!: string;

  @ApiProperty({ example: '2025-09-07T10:31:00.000Z', description: '수정일', type: String })
  updatedAt!: string;

  // 게시글 이미지 목록
  @ApiProperty({
    description: '게시글 이미지 목록',
    type: [ArticleImagesDto],
    required: false,
    example: [{ imageUrl: '/article_images/filename.jpg', order: 1 }],
  })
  images?: ArticleImagesDto[];
}
