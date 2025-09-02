import { ConflictException, Inject, Injectable, Logger } from '@nestjs/common';

import { WINSTON_MODULE_PROVIDER } from 'nest-winston';

import { LOG_LEVELS } from '@common/constants/log-levels.constants';

import { PrismaService } from '@modules/prisma/prisma.service';

import { CreateArticleLikeDto } from '../dto/create-article-like.dto';
import { CreateArticleDto } from '../dto/create-article.dto';
import { CreateCommentLikeDto } from '../dto/create-comment-like.dto';
import { CreateCommentDto } from '../dto/create-comment.dto';

@Injectable()
export class CommunityService {
  constructor(
    private readonly prisma: PrismaService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}
  getCommunityHome() {
    return { message: '커뮤니티 홈 조회 (GET /community)' };
  }

  getArticle() {
    return { message: '게시글 조회 (GET /community/article)' };
  }

  getArticleDetail() {
    return { message: '게시글 상세 조회 (GET /community/article/:articleId)' };
  }

  async createArticle(dto: CreateArticleDto, files: Express.Multer.File[], userId: bigint) {
    // 게시글 생성
    const createdArticle = await this.prisma.article.create({
      data: {
        communityId: dto.community_id,
        title: dto.title,
        content: dto.content,
        isAnonymous: dto.is_anonymous,
        authorId: userId, // JWT에서 추출한 사용자 ID 사용
      },
    });

    // 이미지 파일이 있으면 각각 DB에 저장
    // 병렬 실행을 위해 Promise.all을 사용하도록 수정함
    await Promise.all(
      files.map((file, index) => {
        const imageUrl = `/article_images/${file.filename}`;
        return this.prisma.articleImage.create({
          data: {
            articleId: createdArticle.id,
            imageUrl,
            order: index + 1,
          },
        });
      }),
    );

    return { createdArticleId: createdArticle.id.toString() };
  }

  updateArticle() {
    return { message: '게시글 수정 (PATCH /community/article/:articleId)' };
  }

  deleteArticle() {
    return { message: '게시글 삭제 (DELETE /community/article/:articleId)' };
  }

  async createArticleLike(dto: CreateArticleLikeDto, userId: bigint) {
    // 복합키(articleId, userId) 기반 좋아요 존재 여부 확인
    const existingLike = await this.prisma.articleLike.findUnique({
      where: {
        articleId_userId: {
          articleId: BigInt(dto.article_id),
          userId: userId,
        },
      },
    });

    if (existingLike) {
      throw new ConflictException('이미 좋아요를 누른 게시글입니다.');
    }

    const like = await this.prisma.articleLike.create({
      data: {
        articleId: BigInt(dto.article_id),
        userId: BigInt(dto.user_id),
      },
    });

    return { status: true, message: '좋아요 성공', data: like };
  }

  deleteArticleLike() {
    return { message: '게시글 좋아요 취소 (DELETE /community/article/like)' };
  }

  async createCommentLike(dto: CreateCommentLikeDto, userId: bigint) {
    // 중복 좋아요 확인 (복합 키)
    const existingLike = await this.prisma.articleLike.findUnique({
      where: {
        articleId_userId: {
          articleId: BigInt(dto.comment_id),
          userId: userId,
        },
      },
    });

    if (existingLike) {
      throw new ConflictException('이미 좋아요를 누른 댓글입니다.');
    }

    const like = await this.prisma.articleLike.create({
      data: {
        articleId: BigInt(dto.comment_id),
        userId: BigInt(dto.user_id),
      },
    });

    return { status: true, message: '댓글 좋아요 성공', data: like };
  }

  deleteCommentLike() {
    return { message: '게시글 댓글 좋아요 취소 (DELETE /community/article/comment/like)' };
  }

  getComment() {
    return { message: '게시글 댓글 조회 (GET /community/article/comment)' };
  }

  async createComment(dto: CreateCommentDto, userId: bigint) {
    const comment = await this.prisma.articleComment.create({
      data: {
        articleId: dto.article_id,
        content: dto.content,
        authorId: userId,
        isAnonymous: dto.is_anonymous,
        // parent_comment_id는 대댓글 작성에 필요, 현재는 null로 고정
        parentCommentId: null,
      },
    });

    return { status: true, message: '댓글이 작성되었습니다.', data: comment };
  }

  updateComment() {
    return { message: '게시글 댓글 수정 (PATCH /community/article/comment)' };
  }

  deleteComment() {
    return { message: '게시글 댓글 삭제 (DELETE /community/article/comment)' };
  }

  async createReply(dto: CreateCommentDto, userId: bigint) {
    const reply = await this.prisma.articleComment.create({
      data: {
        articleId: dto.article_id,
        content: dto.content,
        authorId: userId,
        isAnonymous: dto.is_anonymous,
        parentCommentId: dto.parent_comment_id, // 대댓글은 부모 댓글 ID를 반드시 포함
      },
    });

    return { status: true, message: '대댓글이 작성되었습니다.', data: reply };
  }
}
