import { ConflictException, Injectable } from '@nestjs/common';

import { PrismaService } from '@modules/prisma/prisma.service';

import { CreateArticleDto } from './dto/create-article';
import { CreateArticleLikeDto } from './dto/create-article-like';
import { CreateCommentDto } from './dto/create-comment';

@Injectable()
export class CommunityService {
  constructor(private readonly prisma: PrismaService) {}
  getCommunityHome() {
    return { message: '커뮤니티 홈 조회 (GET /community)' };
  }

  getArticle() {
    return { message: '게시글 조회 (GET /community/article)' };
  }

  getArticleDetail() {
    return { message: '게시글 상세 조회 (GET /community/article/:articleId)' };
  }

  async createArticle(dto: CreateArticleDto, files: Express.Multer.File[]) {
    // 게시글 생성
    const createdArticle = await this.prisma.article.create({
      data: {
        communityId: dto.community_id,
        title: dto.title,
        content: dto.content,
        isAnonymous: dto.is_anonymous,
        authorId: dto.author_id,
      },
    });

    // 이미지 파일이 있으면 각각 DB에 저장
    for (const [index, file] of files.entries()) {
      const imageUrl = `/article_images/${file.filename}`; // 추후 업로드 url로 맞게 변경 필요 (앞에 뭔지 경운햄한테 물어보기)
      await this.prisma.articleImage.create({
        data: {
          articleId: createdArticle.id,
          imageUrl: imageUrl,
          order: index + 1,
        },
      });
    }

    return createdArticle;
  }

  updateArticle() {
    return { message: '게시글 수정 (PATCH /community/article/:articleId)' };
  }

  deleteArticle() {
    return { message: '게시글 삭제 (DELETE /community/article/:articleId)' };
  }

  async createArticleLike(dto: CreateArticleLikeDto) {
    // 복합키(articleId, userId) 기반 좋아요 존재 여부 확인
    const existingLike = await this.prisma.articleLike.findUnique({
      where: {
        articleId_userId: {
          articleId: BigInt(dto.article_id),
          userId: BigInt(dto.user_id),
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

  createCommentLike() {
    return { message: '게시글 댓글 좋아요 (POST /community/article/comment/like)' };
  }

  deleteCommentLike() {
    return { message: '게시글 댓글 좋아요 취소 (DELETE /community/article/comment/like)' };
  }

  getComment() {
    return { message: '게시글 댓글 조회 (GET /community/article/comment)' };
  }

  async createComment(dto: CreateCommentDto) {
    const comment = await this.prisma.articleComment.create({
      data: {
        articleId: dto.article_id,
        content: dto.content,
        authorId: dto.author_id,
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

  async createReply(dto: CreateCommentDto) {
    const reply = await this.prisma.articleComment.create({
      data: {
        articleId: dto.article_id,
        content: dto.content,
        authorId: dto.author_id,
        isAnonymous: dto.is_anonymous,
        parentCommentId: dto.parent_comment_id, // 대댓글은 부모 댓글 ID를 반드시 포함
      },
    });

    return { status: true, message: '대댓글이 작성되었습니다.', data: reply };
  }
}
