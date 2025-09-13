import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Logger,
  Param,
  Patch,
  Post,
  Query,
  Req,
} from '@nestjs/common';
import { UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import {
  ApiCookieAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
} from '@nestjs/swagger';

import { WINSTON_MODULE_PROVIDER } from 'nest-winston';

import { LOG_LEVELS } from '@common/constants/log-levels.constants';
import { ApiMultiFileAndJson } from '@common/decorators/api-multipart-form.decorator';
import { FormDataJson } from '@common/decorators/form-data-json.decorator';
import { ResponseMessage } from '@common/decorators/response-message-decorator';
import { ParseJsonPipe } from '@common/pipes/parse-json.pipe';
import { inspectObject } from '@common/utils/inspect-object.utils';

import { Public } from '@modules/auth/decorators/public.decorator';
import { CreateArticleDto, GetArticleDto } from '@modules/community/dto/article.dto';
import { CreateCommentDto, GetCommentDto } from '@modules/community/dto/comment.dto';
import { GetCommunityDto } from '@modules/community/dto/community.dto';
import { CreateArticleLikeDto } from '@modules/community/dto/create-article-like.dto';
import { CreateCommentLikeDto } from '@modules/community/dto/create-comment-like.dto';
import { CommunityService } from '@modules/community/services/community.service';

@Controller({
  path: 'community',
  version: '1',
})
export class CommunityV1Controller {
  // 서비스 주입
  constructor(
    private readonly communityService: CommunityService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  // 커뮤니티 홈 관련
  @Get(':communityId')
  @ApiOperation({ summary: '커뮤니티 홈 조회' })
  @ApiCookieAuth()
  @ApiOkResponse({ description: '커뮤니티 홈 데이터 반환', type: GetCommunityDto })
  @ResponseMessage('커뮤니티 홈이 조회되었습니다.')
  @Public() // TODO: 임시로 Public 처리, 추후 인증 도입 시 제거 필요
  async getCommunityHome(@Param('communityId') communityId: string) {
    return await this.communityService.getCommunityHome(BigInt(communityId));
  }

  // 게시글 목록 조회
  @Get(':communityId/article')
  @ApiOperation({ summary: '게시글 목록 조회' })
  @ApiCookieAuth()
  @ApiOkResponse({ description: '게시글 목록 반환', type: [GetArticleDto] })
  @ApiQuery({ name: 'page', required: false, type: Number, description: '페이지 번호' })
  @ApiQuery({ name: 'limit', required: false, type: Number, description: '페이지 당 개수' })
  @ResponseMessage('게시글 목록이 조회되었습니다.')
  @Public()
  async getArticle(
    @Param('communityId') communityId: string,
    @Query() query: { page?: string; limit?: string },
    @Req() req,
  ) {
    const page = query.page ? Number(query.page) : 1;
    const limit = query.limit ? Number(query.limit) : 10;
    const userId = req.user?.userId;
    return await this.communityService.getArticle(
      { communityId: BigInt(communityId), page, limit },
      userId,
    );
  }

  // 게시글 상세 조회
  @Get('article/:articleId')
  @ApiOperation({ summary: '게시글 상세 조회' })
  @ApiCookieAuth()
  @ApiOkResponse({ description: '게시글 상세 데이터 반환', type: GetArticleDto })
  @ResponseMessage('게시글이 조회되었습니다.')
  // @Public() // TODO: 임시로 Public 처리, 추후 인증 도입 시 제거 필요
  async getArticleDetail(@Param('articleId') articleId: string, @Req() req) {
    // const userId = req.user?.userId;   // 생각해보니 userId가 필요없네
    return await this.communityService.getArticleDetail(BigInt(articleId));
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

  // 게시글 삭제
  @Delete('article/:articleId')
  @ApiOperation({ summary: '게시글 삭제' })
  @ApiCookieAuth()
  @ApiOkResponse({ description: '게시글 삭제 성공', type: Boolean })
  @ResponseMessage('게시글이 삭제되었습니다.')
  async deleteArticle(@Param('articleId') articleId: bigint, @Req() req) {
    const userId = req.user.userId;
    return await this.communityService.deleteArticle(articleId, userId);
  }

  @Post('article/:articleId/like')
  @ApiOperation({ summary: '게시글 좋아요' })
  @ApiCookieAuth()
  @ApiCreatedResponse({ description: '게시글 좋아요 성공', type: Boolean })
  async createArticleLike(@Param('articleId') articleId: string, @Req() req) {
    const userId = req.user.userId;
    return await this.communityService.createArticleLike(BigInt(articleId), userId);
  }

  // 게시글 좋아요 취소
  @Delete('article/:articleId/like')
  @ApiOperation({ summary: '게시글 좋아요 취소' })
  @ApiCookieAuth()
  @ApiOkResponse({ description: '게시글 좋아요 취소 성공', type: Boolean })
  @ResponseMessage('게시글 좋아요가 취소되었습니다.')
  async deleteArticleLike(@Param('articleId') articleId: string, @Req() req) {
    const userId = req.user.userId;
    return this.communityService.deleteArticleLike(BigInt(articleId), userId);
  }

  // 댓글 관련
  // 댓글 좋아요 추가
  @Post('article/comment/:commentId/like')
  @ApiOperation({ summary: '댓글 좋아요 등록' })
  @ApiCookieAuth()
  @ApiCreatedResponse({ description: '댓글 좋아요 등록 성공', type: Boolean })
  async createCommentLike(@Param('commentId') commentId: string, @Req() req) {
    const userId = req.user.userId;
    return await this.communityService.createCommentLike(BigInt(commentId), userId);
  }

  // 댓글 좋아요 취소
  @Delete('article/comment/:commentId/like')
  @ApiOperation({ summary: '댓글 좋아요 취소' })
  @ApiCookieAuth()
  @ApiOkResponse({ description: '댓글 좋아요 취소 성공', type: Boolean })
  @ResponseMessage('댓글 좋아요가 취소되었습니다.')
  async deleteCommentLike(@Param('commentId') commentId: string, @Req() req) {
    const userId = req.user.userId;
    return this.communityService.deleteCommentLike(BigInt(commentId), userId);
  }

  // 댓글 목록 조회
  @Get('article/comment')
  @ApiOperation({ summary: '게시글 댓글 목록 조회' })
  @ApiCookieAuth()
  @ApiOkResponse({ description: '해당 게시글의 댓글 목록 반환', type: [GetCommentDto] })
  @ApiQuery({
    name: 'articleId',
    required: true,
    type: Number,
    description: '댓글을 조회할 게시글 ID',
  })
  @ResponseMessage('댓글 목록이 조회되었습니다.')
  @Public() // TODO: 임시로 Public 처리, 추후 인증 도입 시 제거 필요
  async getComment(@Query('articleId') articleId: bigint, @Req() req) {
    // const userId = req.user.id;    // userId가 필요없음
    return await this.communityService.getComment(articleId);
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

  // 게시글 댓글 삭제
  @Delete('article/comment/:commentId')
  @ApiOperation({ summary: '게시글 댓글 삭제' })
  @ApiCookieAuth()
  @ApiOkResponse({ description: '댓글 삭제 성공' })
  @ResponseMessage('댓글이 삭제되었습니다.')
  async deleteComment(@Param('commentId') commentId: string, @Req() req) {
    const userId = req.user.userId;
    return this.communityService.deleteComment(BigInt(commentId), userId);
  }

  @Post('article/comment/reply')
  @ApiOperation({ summary: '게시글 대댓글 작성' })
  @ApiCreatedResponse({ description: '대댓글 작성 성공', type: CreateCommentDto })
  async createReply(@Body() dto: CreateCommentDto, @Req() req) {
    const userId = req.user.userId;
    return await this.communityService.createReply(dto, userId);
  }
}
