import {
  ConflictException,
  ForbiddenException,
  Inject,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';

import { WINSTON_MODULE_PROVIDER } from 'nest-winston';

import { CreateArticleDto, GetArticleDto } from '@modules/community/dto/article.dto';
import { CreateCommentDto, GetCommentDto } from '@modules/community/dto/comment.dto';
import { CreateArticleLikeDto } from '@modules/community/dto/create-article-like.dto';
import { CreateCommentLikeDto } from '@modules/community/dto/create-comment-like.dto';
import { PrismaService } from '@modules/prisma/prisma.service';

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
  async getArticle(
    { communityId, page, limit }: { communityId: bigint; page?: number; limit?: number },
    // userId: string,
  ) {
    const skip = ((page ?? 1) - 1) * (limit ?? 10);

    const [articles, totalCount] = await this.prisma.$transaction([
      this.prisma.article.findMany({
        where: { communityId },
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
      this.prisma.article.count({ where: { communityId } }),
    ]);

    const articleList = articles.map((article) => ({
      id: article.id.toString(),
      title: article.title,
      content: article.content,
      isAnonymous: article.isAnonymous,
      authorId: article.authorId.toString(),
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
      id: article.id.toString(),
      title: article.title,
      content: article.content,
      isAnonymous: article.isAnonymous,
      authorId: article.authorId.toString(),
      createdAt: article.createdAt.toISOString(),
      updatedAt: article.updatedAt.toISOString(),
      images: article.articleImage?.map((img) => ({
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

  // 게시글 삭제
  async deleteArticle(articleId: bigint, userId: bigint) {
    // 게시글 존재 여부 확인
    const article = await this.prisma.article.findUnique({
      where: { id: articleId },
    });
    if (!article) {
      throw new NotFoundException('해당 게시글을 찾을 수 없습니다.');
    }
    // 게시글 작성자와 요청한 사용자가 일치하는지 확인
    if (article.authorId !== userId) {
      throw new ConflictException('게시글 작성자만 삭제할 수 있습니다.');
    }
    // 게시글 삭제
    await this.prisma.article.delete({
      where: { id: articleId },
    });
    return { status: true, message: '게시글 삭제 성공' };
  }

  async createArticleLike(articleId: bigint, userId: bigint) {
    // 중복 좋아요 확인
    const existingLike = await this.prisma.articleLike.findUnique({
      where: {
        articleId_userId: {
          articleId,
          userId,
        },
      },
    });

    if (existingLike) {
      throw new ConflictException('이미 좋아요를 누른 게시글입니다.');
    }

    // 좋아요 생성
    const like = await this.prisma.articleLike.create({
      data: {
        articleId,
        userId,
      },
    });

    // BigInt 필드를 문자열로 변환하여 반환
    return {
      status: true,
      message: '좋아요 성공',
      data: {
        articleId: like.articleId.toString(),
        userId: like.userId.toString(),
        createdAt: like.createdAt.toISOString(),
        updatedAt: like.updatedAt.toISOString(),
      },
    };
  }

  // 게시글 좋아요 취소
  async deleteArticleLike(articleId: bigint, userId: bigint) {
    // 좋아요 존재 여부 확인
    const existingLike = await this.prisma.articleLike.findUnique({
      where: {
        articleId_userId: {
          articleId,
          userId,
        },
      },
    });

    if (!existingLike) {
      throw new NotFoundException('좋아요를 누르지 않은 게시글입니다.');
    }

    // 좋아요 삭제
    await this.prisma.articleLike.delete({
      where: {
        articleId_userId: { articleId, userId },
      },
    });

    return { status: true, message: '좋아요 취소 성공' };
  }

  async createCommentLike(commentId: bigint, userId: bigint) {
    // 중복 좋아요 확인 (복합 키)
    const existingLike = await this.prisma.articleCommentLike.findUnique({
      where: {
        commentId_userId: {
          commentId,
          userId,
        },
      },
    });

    if (existingLike) {
      throw new ConflictException('이미 좋아요를 누른 댓글입니다.');
    }

    const like = await this.prisma.articleCommentLike.create({
      data: {
        commentId,
        userId,
      },
    });

    return {
      status: true,
      message: '댓글 좋아요 성공',
      data: {
        commentId: like.commentId.toString(),
        userId: like.userId.toString(),
        createdAt: like.createdAt.toISOString(),
        updatedAt: like.updatedAt.toISOString(),
      },
    };
  }

  async deleteCommentLike(commentId: bigint, userId: bigint) {
    // 좋아요 존재 여부 확인
    const existingLike = await this.prisma.articleCommentLike.findUnique({
      where: {
        commentId_userId: {
          commentId,
          userId,
        },
      },
    });

    if (!existingLike) {
      throw new NotFoundException('좋아요를 누르지 않은 댓글입니다.');
    }

    await this.prisma.articleCommentLike.delete({
      where: {
        commentId_userId: { commentId, userId },
      },
    });

    return { status: true, message: '댓글 좋아요 취소 성공' };
  }

  // 댓글 목록 조회
  async getComment(
    { articleId, page, limit }: { articleId: bigint; page?: number; limit?: number },
    // userId: string,
  ) {
    const skip = ((page ?? 1) - 1) * (limit ?? 10);

    const [comments, totalCount] = await this.prisma.$transaction([
      this.prisma.articleComment.findMany({
        where: { articleId },
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.articleComment.count({ where: { articleId } }),
    ]);

    const commentList = comments.map((comment) => ({
      id: comment.id.toString(),
      articleId: comment.articleId.toString(),
      content: comment.content,
      isAnonymous: comment.isAnonymous,
      authorId: comment.authorId.toString(),
      createdAt: comment.createdAt.toISOString(),
      updatedAt: comment.updatedAt.toISOString(),
    }));

    return commentList;
  }

  async createComment(dto: CreateCommentDto, userId: bigint) {
    const comment = await this.prisma.articleComment.create({
      data: {
        articleId: BigInt(dto.articleId),
        content: dto.content,
        authorId: userId,
        isAnonymous: dto.isAnonymous,
        parentCommentId: dto.parentCommentId ? BigInt(dto.parentCommentId) : null,
      },
    });

    return {
      status: true,
      message: '댓글이 작성되었습니다.',
      data: {
        id: comment.id.toString(),
        articleId: comment.articleId.toString(),
        content: comment.content,
        authorId: comment.authorId.toString(),
        isAnonymous: comment.isAnonymous,
        parentCommentId: comment.parentCommentId ? comment.parentCommentId.toString() : null,
        createdAt: comment.createdAt.toISOString(),
        updatedAt: comment.updatedAt.toISOString(),
      },
    };
  }

  updateComment() {
    return { message: '게시글 댓글 수정 (PATCH /community/article/comment)' };
  }

  async deleteComment(commentId: bigint, userId: bigint) {
    // 댓글 존재 및 작성자 확인
    const comment = await this.prisma.articleComment.findUnique({
      where: { id: commentId },
    });

    if (!comment) {
      throw new NotFoundException('존재하지 않는 댓글입니다.');
    }

    if (comment.authorId !== userId) {
      throw new ForbiddenException('본인 댓글만 삭제할 수 있습니다.');
    }

    // 댓글 삭제
    await this.prisma.articleComment.delete({
      where: { id: commentId },
    });

    return { status: true, message: '댓글 삭제 성공' };
  }

  async createReply(dto: CreateCommentDto, userId: bigint) {
    const reply = await this.prisma.articleComment.create({
      data: {
        articleId: BigInt(dto.articleId),
        content: dto.content,
        authorId: userId,
        isAnonymous: dto.isAnonymous,
        parentCommentId: dto.parentCommentId ? BigInt(dto.parentCommentId) : null, // null 처리 꼭 해야 함
      },
    });

    return {
      status: true,
      message: '대댓글이 작성되었습니다.',
      data: {
        id: reply.id.toString(),
        articleId: reply.articleId.toString(),
        content: reply.content,
        authorId: reply.authorId.toString(),
        isAnonymous: reply.isAnonymous,
        parentCommentId: reply.parentCommentId ? reply.parentCommentId.toString() : null,
        createdAt: reply.createdAt.toISOString(),
        updatedAt: reply.updatedAt.toISOString(),
      },
    };
  }
}
