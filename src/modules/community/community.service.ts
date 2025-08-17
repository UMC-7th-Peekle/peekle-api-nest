import { Injectable } from '@nestjs/common';

@Injectable()
export class CommunityService {
  getCommunityHome() {
    return { message: '커뮤니티 홈 조회 (GET /community)' };
  }

  getArticle() {
    return { message: '게시글 조회 (GET /community/article)' };
  }

  getArticleDetail() {
    return { message: '게시글 상세 조회 (GET /community/article/:articleId)' };
  }

  createArticle() {
    return { message: '게시글 작성 (POST /community/article)' };
  }

  updateArticle() {
    return { message: '게시글 수정 (PATCH /community/article/:articleId)' };
  }

  deleteArticle() {
    return { message: '게시글 삭제 (DELETE /community/article/:articleId)' };
  }

  createArticleLike() {
    return { message: '게시글 좋아요 (POST /community/article/like)' };
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

  createComment() {
    return { message: '게시글 댓글 작성 (POST /community/article/comment)' };
  }

  updateComment() {
    return { message: '게시글 댓글 수정 (PATCH /community/article/comment)' };
  }

  deleteComment() {
    return { message: '게시글 댓글 삭제 (DELETE /community/article/comment)' };
  }

  createReply() {
    return { message: '게시글 대댓글 작성 (POST /community/article/comment/reply)' };
  }
}
