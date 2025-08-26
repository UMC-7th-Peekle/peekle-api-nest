import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';

import { CommunityService } from './community.service';
import { CreateArticleDto } from './dto/create-article';

@Controller('community')
export class CommunityController {
  // 서비스 주입
  constructor(private readonly communityService: CommunityService) {}

  // 커뮤니티 홈 관련
  @Get('')
  getCommunityHome() {
    // 지금 이 클래스에 주입한 서비스에 접근해야 돼서 this
    return this.communityService.getCommunityHome();
  }

  // 게시글 관련
  @Get('article')
  getArticle() {
    return this.communityService.getArticle();
  }

  @Get('article/:articleId')
  getArticleDetail() {
    return this.communityService.getArticleDetail();
  }

  @Post('article')
  async createArticle(@Body() dto: CreateArticleDto) {
    return await this.communityService.createArticle(dto);
  }

  @Patch('article/:articleId')
  updateArticle() {
    return this.communityService.updateArticle();
  }

  @Delete('article/:articleId')
  deleteArticle() {
    return this.communityService.deleteArticle();
  }

  @Post('article/like')
  createArticleLike() {
    return this.communityService.createArticleLike();
  }

  @Delete('article/like')
  deleteArticleLike() {
    return this.communityService.deleteArticleLike();
  }

  // 댓글 관련
  @Post('article/comment/like')
  createCommentLike() {
    return this.communityService.createCommentLike();
  }

  @Delete('article/comment/like')
  deleteCommentLike() {
    return this.communityService.deleteCommentLike();
  }

  @Get('article/comment')
  getComment() {
    return this.communityService.getComment();
  }

  @Post('article/comment')
  createComment() {
    return this.communityService.createComment();
  }

  @Patch('article/comment')
  updateComment() {
    return this.communityService.updateComment();
  }

  @Delete('article/comment')
  deleteComment() {
    return this.communityService.deleteComment();
  }

  @Post('article/comment/reply')
  createReply() {
    return this.communityService.createReply();
  }
}
