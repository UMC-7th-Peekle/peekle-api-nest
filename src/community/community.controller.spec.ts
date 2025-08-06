import { Test, TestingModule } from '@nestjs/testing';

import { CommunityController } from './community.controller';
import { CommunityService } from './community.service';

describe('CommunityController', () => {
  let communityController: CommunityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommunityController],
      providers: [CommunityService],
    }).compile();

    communityController = module.get<CommunityController>(CommunityController);
  });

  it('should be defined', () => {
    expect(communityController).toBeDefined();
  });

  // 요기 이후로 쭉 테스트 코드 작성하면 되는듯
  describe('getCommunityHome', () => {
    it('should return community home message', () => {
      expect(communityController.getCommunityHome()).toEqual({
        message: '커뮤니티 홈 조회 (GET /community)',
      });
    });
  });

  describe('getArticle', () => {
    it('should return articles message', () => {
      expect(communityController.getArticle()).toEqual({
        message: '게시글 조회 (GET /community/article)',
      });
    });
  });

  describe('getArticleDetail', () => {
    it('should return article detail message', () => {
      expect(communityController.getArticleDetail()).toEqual({
        message: '게시글 상세 조회 (GET /community/article/:articleId)',
      });
    });
  });

  describe('createArticle', () => {
    it('should return create article message', () => {
      expect(communityController.createArticle()).toEqual({
        message: '게시글 작성 (POST /community/article)',
      });
    });
  });

  describe('updateArticle', () => {
    it('should return update article message', () => {
      expect(communityController.updateArticle()).toEqual({
        message: '게시글 수정 (PATCH /community/article/:articleId)',
      });
    });
  });

  describe('deleteArticle', () => {
    it('should return delete article message', () => {
      expect(communityController.deleteArticle()).toEqual({
        message: '게시글 삭제 (DELETE /community/article/:articleId)',
      });
    });
  });

  describe('createArticleLike', () => {
    it('should return create article like message', () => {
      expect(communityController.createArticleLike()).toEqual({
        message: '게시글 좋아요 (POST /community/article/like)',
      });
    });
  });

  describe('deleteArticleLike', () => {
    it('should return delete article like message', () => {
      expect(communityController.deleteArticleLike()).toEqual({
        message: '게시글 좋아요 취소 (DELETE /community/article/like)',
      });
    });
  });

  describe('createCommentLike', () => {
    it('should return create comment like message', () => {
      expect(communityController.createCommentLike()).toEqual({
        message: '게시글 댓글 좋아요 (POST /community/article/comment/like)',
      });
    });
  });

  describe('deleteCommentLike', () => {
    it('should return delete comment like message', () => {
      expect(communityController.deleteCommentLike()).toEqual({
        message: '게시글 댓글 좋아요 취소 (DELETE /community/article/comment/like)',
      });
    });
  });

  describe('getComment', () => {
    it('should return get comment message', () => {
      expect(communityController.getComment()).toEqual({
        message: '게시글 댓글 조회 (GET /community/article/comment)',
      });
    });
  });

  describe('createComment', () => {
    it('should return create comment message', () => {
      expect(communityController.createComment()).toEqual({
        message: '게시글 댓글 작성 (POST /community/article/comment)',
      });
    });
  });

  describe('updateComment', () => {
    it('should return update comment message', () => {
      expect(communityController.updateComment()).toEqual({
        message: '게시글 댓글 수정 (PATCH /community/article/comment)',
      });
    });
  });

  describe('deleteComment', () => {
    it('should return delete comment message', () => {
      expect(communityController.deleteComment()).toEqual({
        message: '게시글 댓글 삭제 (DELETE /community/article/comment)',
      });
    });
  });

  describe('createReply', () => {
    it('should return create reply message', () => {
      expect(communityController.createReply()).toEqual({
        message: '게시글 대댓글 작성 (POST /community/article/comment/reply)',
      });
    });
  });
});
