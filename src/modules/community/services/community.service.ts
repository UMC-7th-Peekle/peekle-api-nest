import {
  ConflictException,
  ForbiddenException,
  Inject,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';

import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import is from 'zod/v4/locales/is.cjs';

import { CreateArticleLikeDto } from '@modules/community/dto/article-like.dto';
import { CreateArticleDto, GetArticleDto } from '@modules/community/dto/article.dto';
import { CreateCommentLikeDto } from '@modules/community/dto/comment-like.dto';
import { CreateCommentDto, GetCommentDto } from '@modules/community/dto/comment.dto';
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
    // 커뮤니티 존재 여부 확인
    const community = await this.prisma.community.findUnique({
      where: { id: communityId },
    });
    if (!community) {
      throw new NotFoundException('존재하지 않는 커뮤니티입니다.');
    }

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

  // 게시글 작성
  async createArticle(dto: CreateArticleDto, files: Express.Multer.File[], userId: bigint) {
    // 커뮤니티 존재 여부 확인
    const community = await this.prisma.community.findUnique({
      where: { id: dto.communityId },
    });
    if (!community) {
      throw new NotFoundException('존재하지 않는 커뮤니티입니다.');
    }

    // 게시글 생성
    const createdArticle = await this.prisma.article.create({
      data: {
        communityId: dto.communityId,
        title: dto.title,
        content: dto.content,
        isAnonymous: dto.isAnonymous,
        authorId: userId,
      },
    });

    // 이미지 파일이 있으면 각각 DB에 저장
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

    return {
      communityId: createdArticle.communityId.toString(),
      title: createdArticle.title,
      content: createdArticle.content,
      isAnonymous: createdArticle.isAnonymous,
    };
  }

  // 게시글 수정
  async updateArticle(
    articleId: bigint,
    dto: Partial<CreateArticleDto>,
    userId: bigint,
    files?: Express.Multer.File[],
  ) {
    // 게시글 존재 여부 확인
    const article = await this.prisma.article.findUnique({
      where: { id: articleId },
      include: { articleImage: true },
    });

    if (!article) {
      throw new NotFoundException('해당 게시글을 찾을 수 없습니다.');
    }

    // 게시글 작성자와 요청한 사용자가 일치하는지 확인
    if (article.authorId !== userId) {
      throw new ForbiddenException('게시글 작성자만 수정할 수 있습니다.');
    }

    // communityId가 수정 요청에 포함된 경우 존재 여부 확인
    let newCommunityId = article.communityId;
    if (dto.communityId && dto.communityId !== article.communityId) {
      const community = await this.prisma.community.findUnique({
        where: { id: dto.communityId },
      });
      if (!community) {
        throw new NotFoundException('존재하지 않는 커뮤니티입니다.');
      }
      newCommunityId = dto.communityId;
    }

    // 게시글 수정
    const updatedArticle = await this.prisma.article.update({
      where: { id: articleId },
      data: {
        communityId: newCommunityId,
        title: dto.title ?? article.title,
        content: dto.content ?? article.content,
        isAnonymous: dto.isAnonymous ?? article.isAnonymous,
      },
    });

    // 이미지 파일이 있으면 기존 이미지 삭제 후 새로 저장
    if (files && files.length > 0) {
      await this.prisma.articleImage.deleteMany({
        where: { articleId },
      });

      await Promise.all(
        files.map((file, index) => {
          const imageUrl = `/article_images/${file.filename}`;
          return this.prisma.articleImage.create({
            data: {
              articleId: updatedArticle.id,
              imageUrl,
              order: index + 1,
            },
          });
        }),
      );
    }

    return {
      communityId: updatedArticle.communityId.toString(),
      title: updatedArticle.title,
      content: updatedArticle.content,
      isAnonymous: updatedArticle.isAnonymous,
    };
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

  // 게시글 좋아요 추가
  async createArticleLike(dto: CreateArticleLikeDto, articleId: bigint, userId: bigint) {
    // 게시글 존재 여부 확인
    const article = await this.prisma.article.findUnique({
      where: { id: articleId },
    });
    if (!article) {
      throw new NotFoundException('존재하지 않는 게시글입니다.');
    }

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

  // 댓글 좋아요 추가
  async createCommentLike(commentId: bigint, userId: bigint) {
    // 댓글 존재 여부 확인
    const comment = await this.prisma.articleComment.findUnique({
      where: { id: commentId },
    });
    if (!comment) {
      throw new NotFoundException('존재하지 않는 댓글입니다.');
    }

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
    // 게시글 존재 여부를 확인
    const article = await this.prisma.article.findUnique({
      where: { id: articleId },
    });
    if (!article) {
      throw new NotFoundException('존재하지 않는 게시글입니다.');
    }

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
      parentCommentId: comment.parentCommentId ? comment.parentCommentId.toString() : null,
      content: comment.content,
      authorId: comment.authorId.toString(),
      isAnonymous: comment.isAnonymous,
      createdAt: comment.createdAt.toISOString(),
      updatedAt: comment.updatedAt.toISOString(),
    }));

    return commentList;
  }

  // 댓글 작성
  async createComment(dto: CreateCommentDto, userId: string) {
    // articleId가 존재하는지 확인
    const article = await this.prisma.article.findUnique({
      where: { id: BigInt(dto.articleId) },
    });
    if (!article) {
      throw new NotFoundException('존재하지 않는 게시글입니다.');
    }

    // parentCommentId가 있을 경우 존재 여부 확인
    let parentCommentId: bigint | null = null;
    if (dto.parentCommentId) {
      parentCommentId = BigInt(dto.parentCommentId);
      const parentComment = await this.prisma.articleComment.findUnique({
        where: { id: parentCommentId },
      });
      if (!parentComment) {
        throw new NotFoundException('존재하지 않는 부모 댓글입니다.');
      }
    }

    // 댓글 생성
    const createdComment = await this.prisma.articleComment.create({
      data: {
        articleId: BigInt(dto.articleId),
        content: dto.content,
        authorId: BigInt(userId),
        isAnonymous: dto.isAnonymous,
        parentCommentId: dto.parentCommentId ? BigInt(dto.parentCommentId) : null,
      },
    });

    return {
      articleId: createdComment.articleId.toString(),
      content: createdComment.content,
      isAnonymous: createdComment.isAnonymous,
      parentCommentId:
        createdComment.parentCommentId !== null ? Number(createdComment.parentCommentId) : null,
    };
  }

  // 댓글 수정
  async updateComment(
    commentId: bigint,
    dto: { content: string; isAnonymous?: boolean },
    userId: bigint,
  ) {
    // 댓글 존재 및 작성자 확인
    const comment = await this.prisma.articleComment.findUnique({
      where: { id: commentId },
    });

    if (!comment) {
      throw new NotFoundException('존재하지 않는 댓글입니다.');
    }

    if (comment.authorId !== userId) {
      throw new ForbiddenException('본인 댓글만 수정할 수 있습니다.');
    }

    // 댓글 수정
    const updatedComment = await this.prisma.articleComment.update({
      where: { id: commentId },
      data: {
        content: dto.content,
        isAnonymous: dto.isAnonymous ?? comment.isAnonymous,
      },
    });

    return {
      articleId: updatedComment.articleId.toString(),
      content: updatedComment.content,
      isAnonymous: updatedComment.isAnonymous,
      parentCommentId:
        updatedComment.parentCommentId !== null ? Number(updatedComment.parentCommentId) : null,
    };
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

  // 대댓글 작성
  // async createReply(dto: CreateCommentDto, userId: bigint) {
  //   const parentCommentId = dto.parentCommentId ? BigInt(dto.parentCommentId) : null;

  //   if (parentCommentId) {
  //     const exists = await this.prisma.articleComment.findUnique({
  //       where: { id: parentCommentId },
  //     });
  //     if (!exists) {
  //       throw new NotFoundException('존재하지 않는 부모 댓글입니다.');
  //     }
  //   }

  //   const reply = await this.prisma.articleComment.create({
  //     data: {
  //       articleId: BigInt(dto.articleId),
  //       content: dto.content,
  //       authorId: userId,
  //       isAnonymous: dto.isAnonymous,
  //       parentCommentId,
  //     },
  //   });

  //   return {
  //     status: true,
  //     message: '대댓글이 작성되었습니다.',
  //     data: {
  //       id: reply.id.toString(),
  //       articleId: reply.articleId.toString(),
  //       content: reply.content,
  //       authorId: reply.authorId.toString(),
  //       isAnonymous: reply.isAnonymous,
  //       parentCommentId: reply.parentCommentId ? reply.parentCommentId.toString() : null,
  //       createdAt: reply.createdAt.toISOString(),
  //       updatedAt: reply.updatedAt.toISOString(),
  //     },
  //   };
  // }
}
