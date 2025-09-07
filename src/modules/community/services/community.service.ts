import { ConflictException, Inject, Injectable, Logger, NotFoundException } from '@nestjs/common';

import { WINSTON_MODULE_PROVIDER } from 'nest-winston';

import { LOG_LEVELS } from '@common/constants/log-levels.constants';

import { PrismaService } from '@modules/prisma/prisma.service';

import { CreateArticleDto, GetArticleDto } from '../dto/article.dto';
import { CreateCommentDto, GetCommentDto } from '../dto/comment.dto';
import { CreateArticleLikeDto } from '../dto/create-article-like.dto';
import { CreateCommentLikeDto } from '../dto/create-comment-like.dto';

@Injectable()
export class CommunityService {
  constructor(
    private readonly prisma: PrismaService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  // 커뮤니티 홈 조회
  async getCommunityHome(communityId: bigint) {
    const community = await this.prisma.community.findUnique({
      where: { id: communityId },
      select: {
        id: true,
        name: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!community) {
      throw new NotFoundException('해당 커뮤니티를 찾을 수 없습니다.');
    }

    return {
      id: community.id.toString(),
      name: community.name,
      createdAt: community.createdAt.toISOString(),
      updatedAt: community.updatedAt.toISOString(),
    };
  }

  // 게시글 목록 조회
  async getArticle(query: { page?: number; limit?: number }, userId: bigint) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 10;
    const skip = (page - 1) * limit;

    const [articles, totalCount] = await this.prisma.$transaction([
      this.prisma.article.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          articleImage: {
            select: { imageUrl: true, order: true },
            orderBy: { order: 'asc' },
          },
        },
      }),
      this.prisma.article.count(),
    ]);

    const articleList = articles.map((article) => ({
      id: article.id,
      title: article.title,
      content: article.content,
      isAnonymous: article.isAnonymous,
      authorId: article.authorId,
      createdAt: article.createdAt.toISOString(),
      updatedAt: article.updatedAt.toISOString(),
      images: article.articleImage.map((img) => ({
        imageUrl: img.imageUrl,
        order: img.order,
      })),
    }));

    return articleList;
  }

  // 게시글 상세 조회
  /* 가입 하지 않은 유저도 조회 가능 */
  async getArticleDetail(articleId: bigint): Promise<GetArticleDto> {
    const article = await this.prisma.article.findUnique({
      where: { id: articleId },
      include: {
        articleImage: {
          // 게시글 이미지 포함
          select: {
            imageUrl: true,
            order: true,
          },
          orderBy: { order: 'asc' },
        },
      },
    });

    if (!article) {
      throw new NotFoundException('해당 게시글을 찾을 수 없습니다.');
    }

    return {
      id: article.id,
      title: article.title,
      content: article.content,
      isAnonymous: article.isAnonymous,
      authorId: article.authorId,
      createdAt: article.createdAt.toISOString(),
      updatedAt: article.updatedAt.toISOString(),
      images: article.articleImage?.map((img) => ({
        // 이미지미이 매핑
        imageUrl: img.imageUrl,
        order: img.order,
      })),
    };
  }

  async createArticle(dto: CreateArticleDto, files: Express.Multer.File[], userId: bigint) {
    // 게시글 생성
    const createdArticle = await this.prisma.article.create({
      data: {
        communityId: dto.communityId,
        title: dto.title,
        content: dto.content,
        isAnonymous: dto.isAnonymous,
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
          articleId: dto.articleId,
          userId: userId,
        },
      },
    });

    if (existingLike) {
      throw new ConflictException('이미 좋아요를 누른 게시글입니다.');
    }

    const like = await this.prisma.articleLike.create({
      data: {
        articleId: BigInt(dto.articleId),
        userId: userId,
      },
    });

    return { status: true, message: '좋아요 성공', data: like };
  }

  deleteArticleLike() {
    return { message: '게시글 좋아요 취소 (DELETE /community/article/like)' };
  }

  async createCommentLike(dto: CreateCommentLikeDto, userId: bigint) {
    // 중복 좋아요 확인 (복합 키)
    const existingLike = await this.prisma.articleCommentLike.findUnique({
      where: {
        commentId_userId: {
          commentId: dto.commentId,
          userId: userId,
        },
      },
    });

    if (existingLike) {
      throw new ConflictException('이미 좋아요를 누른 댓글입니다.');
    }

    const like = await this.prisma.articleLike.create({
      data: {
        articleId: dto.commentId,
        userId: userId,
      },
    });

    return { status: true, message: '댓글 좋아요 성공', data: like };
  }

  deleteCommentLike() {
    return { message: '게시글 댓글 좋아요 취소 (DELETE /community/article/comment/like)' };
  }

  async getComment(articleId: bigint): Promise<GetCommentDto[]> {
    // 댓글 목록 조회
    const comments = await this.prisma.articleComment.findMany({
      where: { articleId: articleId },
      orderBy: { createdAt: 'desc' },
    });

    if (!comments || comments.length === 0) {
      throw new NotFoundException('해당 게시글에 댓글이 없습니다.');
    }

    return comments.map((comment) => ({
      id: comment.id,
      articleId: comment.articleId,
      content: comment.content,
      authorId: comment.authorId,
      isAnonymous: comment.isAnonymous,
      createdAt: comment.createdAt.toISOString(),
      updatedAt: comment.updatedAt.toISOString(),
    }));
  }

  async createComment(dto: CreateCommentDto, userId: bigint) {
    const comment = await this.prisma.articleComment.create({
      data: {
        articleId: dto.articleId,
        content: dto.content,
        authorId: userId,
        isAnonymous: dto.isAnonymous,
        // parent_comment_id는 대댓글 작성에 필요, 현재는 null로 고정
        parentCommentId: dto.parentCommentId,
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
        articleId: dto.articleId,
        content: dto.content,
        authorId: userId,
        isAnonymous: dto.isAnonymous,
        parentCommentId: dto.parentCommentId, // 대댓글은 부모 댓글 ID를 반드시 포함
      },
    });

    return { status: true, message: '대댓글이 작성되었습니다.', data: reply };
  }
}
