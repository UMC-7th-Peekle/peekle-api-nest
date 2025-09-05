import { Body, Controller, Delete, Get, Inject, Logger, Patch, Post, Req } from '@nestjs/common';
import { UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ApiCookieAuth, ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';

import { WINSTON_MODULE_PROVIDER } from 'nest-winston';

import { LOG_LEVELS } from '@common/constants/log-levels.constants';
import { ApiMultiFileAndJson } from '@common/decorators/api-multipart-form.decorator';
import { FormDataJson } from '@common/decorators/form-data-json.decorator';
import { ResponseMessage } from '@common/decorators/response-message-decorator';
import { ParseJsonPipe } from '@common/pipes/parse-json.pipe';
import { inspectObject } from '@common/utils/inspect-object.utils';

import { CreateArticleLikeDto } from './dto/create-article-like.dto';
import { CreateArticleDto } from './dto/create-article.dto';
import { CreateCommentLikeDto } from './dto/create-comment-like.dto';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CommunityService } from './services/community.service';

@Controller({
  version: '1',
})
export class CommunityControllerV1 {
  // 서비스 주입
  constructor(
    private readonly communityService: CommunityService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

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
  @ApiMultiFileAndJson('article_images', CreateArticleDto)
  @ApiOperation({ summary: '게시글 작성' })
  @ApiCookieAuth()
  @ApiCreatedResponse({ description: '게시글 생성 성공', type: CreateArticleDto })
  @UseInterceptors(FilesInterceptor('article_images'))
  @ResponseMessage('게시글이 생성되었습니다.')
  async createArticle(
    @UploadedFiles() files: Express.Multer.File[], // form-data 에서 article_images는 이미지 파일들
    @FormDataJson('data', ParseJsonPipe) data: CreateArticleDto, // form-data 에서 data는 내용 부분 (이미지 제외한 나머지)
    @Req() req,
  ) {
    this.logger.log(LOG_LEVELS.VERBOSE, inspectObject(req.user));
    const userId = req.user.userId;
    // const userId = 1n; // TODO: 임시로 1번 유저로 고정, JWT 인증 도입 후 수정 필요

    return await this.communityService.createArticle(data, files, userId);
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
  @ApiOperation({ summary: '게시글 좋아요' })
  @ApiCreatedResponse({ description: '게시글 좋아요 성공', type: Boolean })
  async createArticleLike(@Body() dto: CreateArticleLikeDto, @Req() req) {
    const userId = req.user.userId;
    return await this.communityService.createArticleLike(dto, userId);
  }

  @Delete('article/like')
  deleteArticleLike() {
    return this.communityService.deleteArticleLike();
  }

  // 댓글 관련
  @Post('article/comment/like')
  @ApiOperation({ summary: '댓글 좋아요 등록' })
  @ApiCreatedResponse({ description: '댓글 좋아요 등록 성공', type: Boolean })
  async createCommentLike(@Body() dto: CreateCommentLikeDto, @Req() req) {
    const userId = req.user.userId;
    return await this.communityService.createCommentLike(dto, userId);
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
  @ApiOperation({ summary: '게시글 댓글 작성' })
  @ApiCreatedResponse({ description: '댓글 작성 성공', type: CreateCommentDto })
  async createComment(@Body() dto: CreateCommentDto, @Req() req) {
    const userId = req.user.userId;
    return await this.communityService.createComment(dto, userId);
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
  @ApiOperation({ summary: '게시글 대댓글 작성' })
  @ApiCreatedResponse({ description: '대댓글 작성 성공', type: CreateCommentDto })
  async createReply(@Body() dto: CreateCommentDto, @Req() req) {
    const userId = req.user.userId;
    return await this.communityService.createReply(dto, userId);
  }
}
