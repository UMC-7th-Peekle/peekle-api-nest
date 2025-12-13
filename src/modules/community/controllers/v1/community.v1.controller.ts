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
  UnauthorizedException,
} from '@nestjs/common';
import { UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import {
  ApiBearerAuth,
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
import { CreateArticleLikeDto } from '@modules/community/dto/article-like.dto';
import {
  CreateArticleDto,
  GetArticleDto,
  UpdateArticleDto,
} from '@modules/community/dto/article.dto';
import { CreateCommentLikeDto } from '@modules/community/dto/comment-like.dto';
import {
  CreateCommentDto,
  GetCommentDto,
  UpdateCommentDto,
} from '@modules/community/dto/comment.dto';
import { GetCommunityDto } from '@modules/community/dto/community.dto';
import { CreateCommunityDto } from '@modules/community/dto/create-community.dto';
import { CommunityService } from '@modules/community/services/community.service';

import { FilterArticleDto } from '../../dto/filter-article.dto';

// 게시글 관련 필터 타입 enum 값으로..
export enum ArticleFilterType {
  ALL = 'ALL', // 전체 게시글
  LIKE = 'LIKE', // 내가 찜한 글
  MY = 'MY', // 내가 작성한 글
  COMMENT = 'COMMENT', // 내가 댓글 적은 글
}

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

  // 커뮤니티 생성
  @Post('')
  @ApiOperation({ summary: '커뮤니티 생성 (db 초기화 시 추가 테스트용)' })
  @ApiBearerAuth()
  @ApiCreatedResponse({ description: '커뮤니티 생성 성공', type: CreateCommunityDto })
  @ResponseMessage('커뮤니티가 생성되었습니다.')
  @Public()
  async createCommunity(@Body() dto: CreateCommunityDto, @Req() req) {
    return await this.communityService.createCommunity(dto);
  }

  // 커뮤니티 홈 관련
  @Get(':communityId')
  @ApiOperation({ summary: '커뮤니티 홈 조회' })
  @ApiBearerAuth()
  @ApiOkResponse({ description: '커뮤니티 홈 데이터 반환', type: GetCommunityDto })
  @ResponseMessage('커뮤니티 홈이 조회되었습니다.')
  @Public() // TODO: 임시로 Public 처리, 추후 인증 도입 시 제거 필요
  async getCommunityHome(@Param('communityId') communityId: string) {
    return await this.communityService.getCommunityHome(BigInt(communityId));
  }

  // 게시글 목록 조회
  @Get(':communityId/article')
  @ApiOperation({ summary: '게시글 목록 조회' })
  @ApiBearerAuth()
  @ApiOkResponse({ description: '게시글 목록 반환', type: FilterArticleDto })
  @ApiQuery({ name: 'page', required: false, type: Number, description: '페이지 번호' })
  @ApiQuery({ name: 'limit', required: false, type: Number, description: '페이지 당 개수' })
  @ApiQuery({
    name: 'search',
    required: false,
    type: String,
    description: '검색어 (제목 또는 내용)',
  })
  @ApiQuery({
    name: 'filterType',
    required: false,
    enum: ArticleFilterType,
    description:
      '게시글 필터 타입 (LIKE: 내가 찜한 글, MY: 내가 작성한 글, COMMENT: 내가 댓글 적은 글)',
  })
  @ResponseMessage('게시글 목록이 조회되었습니다.')
  @Public()
  async getArticle(
    @Param('communityId') communityId: string,
    @Query()
    query: { page?: string; limit?: string; filterType?: ArticleFilterType; search?: string },
    @Req() req,
  ) {
    const page = query.page ? Number(query.page) : 1;
    const limit = query.limit ? Number(query.limit) : 10;
    const filter = query.filterType || ArticleFilterType.ALL;
    const search = query.search ? String(query.search) : undefined;
    const userId = req.user?.userId ? String(req.user.userId) : undefined;

    const requiresAuth =
      filter === ArticleFilterType.MY || // 내가 작성한 글
      filter === ArticleFilterType.LIKE || // 내가 찜한 글
      filter === ArticleFilterType.COMMENT; // 댓글 적은 글

    if (requiresAuth && !userId) {
      throw new UnauthorizedException('로그인이 필요한 필터입니다.');
    }

    return await this.communityService.getArticle({
      communityId: BigInt(communityId),
      page,
      limit,
      filter,
      userId,
      search,
    });
  }

  // 게시글 상세 조회
  @Get('article/:articleId')
  @ApiOperation({ summary: '게시글 상세 조회' })
  @ApiBearerAuth()
  @ApiOkResponse({ description: '게시글 상세 데이터 반환', type: GetArticleDto })
  @ResponseMessage('게시글이 조회되었습니다.')
  // @Public() // TODO: 임시로 Public 처리, 추후 인증 도입 시 제거 필요
  async getArticleDetail(@Param('articleId') articleId: string, @Req() req) {
    const userId = req.user?.userId ? String(req.user.userId) : undefined;
    return await this.communityService.getArticleDetail(BigInt(articleId), userId);
  }

  @Post('article')
  @ApiMultiFileAndJson('article_images', CreateArticleDto)
  @ApiOperation({ summary: '게시글 작성' })
  @ApiBearerAuth()
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

  // 게시글 수정
  @Patch('article/:articleId')
  @ApiMultiFileAndJson('article_images', UpdateArticleDto)
  @ApiOperation({ summary: '게시글 수정' })
  @ApiBearerAuth()
  @ApiOkResponse({ description: '게시글 수정 성공', type: UpdateArticleDto })
  @UseInterceptors(FilesInterceptor('article_images'))
  @ResponseMessage('게시글이 수정되었습니다.')
  async updateArticle(
    @Param('articleId') articleId: string,
    @UploadedFiles() files: Express.Multer.File[], // form-data에서 article_images는 이미지 파일들
    @FormDataJson('data', ParseJsonPipe) data: UpdateArticleDto, // form-data에서 data는 내용 부분
    @Req() req,
  ) {
    const userId = req.user.userId;
    return await this.communityService.updateArticle(BigInt(articleId), data, userId, files);
  }

  // 게시글 삭제
  @Delete('article/:articleId')
  @ApiOperation({ summary: '게시글 삭제' })
  @ApiBearerAuth()
  @ApiOkResponse({ description: '게시글 삭제 성공' })
  @ResponseMessage('게시글이 삭제되었습니다.')
  async deleteArticle(@Param('articleId') articleId: bigint, @Req() req) {
    const userId = req.user.userId;
    return await this.communityService.deleteArticle(articleId, userId);
  }

  // 게시글 좋아요 추가
  @Post('article/:articleId/like')
  @ApiOperation({ summary: '게시글 좋아요 추가' })
  @ApiBearerAuth()
  @ApiCreatedResponse({ description: '게시글 좋아요 성공', type: CreateArticleLikeDto })
  async createArticleLike(
    @Body() dto: CreateArticleLikeDto,
    @Param('articleId') articleId: string,
    @Req() req,
  ) {
    const userId = req.user.userId;

    return await this.communityService.createArticleLike(dto, BigInt(articleId), userId);
  }

  // 게시글 좋아요 취소
  @Delete('article/:articleId/like')
  @ApiOperation({ summary: '게시글 좋아요 취소' })
  @ApiBearerAuth()
  @ApiOkResponse({ description: '게시글 좋아요 취소 성공' })
  @ResponseMessage('게시글 좋아요가 취소되었습니다.')
  async deleteArticleLike(@Param('articleId') articleId: string, @Req() req) {
    const userId = req.user.userId;
    return this.communityService.deleteArticleLike(BigInt(articleId), userId);
  }

  // 댓글 관련
  // 댓글 좋아요 추가
  @Post('article/comment/:commentId/like')
  @ApiOperation({ summary: '댓글 좋아요 추가' })
  @ApiBearerAuth()
  @ApiCreatedResponse({ description: '댓글 좋아요 등록 성공', type: CreateCommentLikeDto })
  async createCommentLike(@Param('commentId') commentId: string, @Req() req) {
    const userId = req.user.userId;
    return await this.communityService.createCommentLike(BigInt(commentId), userId);
  }

  // 댓글 좋아요 취소
  @Delete('article/comment/:commentId/like')
  @ApiOperation({ summary: '댓글 좋아요 취소' })
  @ApiBearerAuth()
  @ApiOkResponse({ description: '댓글 좋아요 취소 성공' })
  @ResponseMessage('댓글 좋아요가 취소되었습니다.')
  async deleteCommentLike(@Param('commentId') commentId: string, @Req() req) {
    const userId = req.user.userId;
    return this.communityService.deleteCommentLike(BigInt(commentId), userId);
  }

  // 댓글 목록 조회
  @Get('article/:articleId/comment')
  @ApiOperation({ summary: '게시글 댓글 목록 조회' })
  @ApiBearerAuth()
  @ApiOkResponse({ description: '해당 게시글의 댓글 목록 반환', type: [GetCommentDto] })
  @ApiQuery({
    name: 'articleId',
    required: true,
    type: Number,
    description: '댓글을 조회할 게시글 ID',
  })
  @ApiQuery({ name: 'page', required: false, type: Number, description: '페이지 번호' })
  @ApiQuery({ name: 'limit', required: false, type: Number, description: '페이지 당 개수' })
  @ResponseMessage('댓글 목록이 조회되었습니다.')
  @Public() // TODO: 임시로 Public 처리, 추후 인증 도입 시 제거 필요
  async getComment(
    @Query('articleId') articleId: string,
    @Query() query: { page?: string; limit?: string },
    @Req() req,
  ) {
    const page = query.page ? Number(query.page) : 1;
    const limit = query.limit ? Number(query.limit) : 10;
    const userId = req.user?.userId ? String(req.user.userId) : undefined;
    return await this.communityService.getComment(
      {
        articleId: BigInt(articleId),
        page,
        limit,
      },
      userId,
    );
  }

  // 게시글 댓글 작성
  @Post('article/comment')
  @ApiOperation({ summary: '게시글 댓글 작성' })
  @ApiBearerAuth()
  @ApiCreatedResponse({ description: '댓글 작성 성공', type: CreateCommentDto })
  async createComment(@Body() dto: CreateCommentDto, @Req() req) {
    const userId = req.user.userId;
    return await this.communityService.createComment(dto, userId);
  }

  // 댓글 수정
  @Patch('article/comment/:commentId')
  @ApiOperation({ summary: '게시글 댓글 수정' })
  @ApiBearerAuth()
  @ApiOkResponse({ description: '댓글 수정 성공', type: CreateCommentDto })
  @ResponseMessage('댓글이 수정되었습니다.')
  async updateComment(
    @Param('commentId') commentId: string,
    @Body() dto: UpdateCommentDto,
    @Req() req,
  ) {
    const userId = req.user.userId;
    return await this.communityService.updateComment(BigInt(commentId), dto, userId);
  }

  // 게시글 댓글 삭제
  @Delete('article/comment/:commentId')
  @ApiOperation({ summary: '게시글 댓글 삭제' })
  @ApiBearerAuth()
  @ApiOkResponse({ description: '댓글 삭제 성공' })
  @ResponseMessage('댓글이 삭제되었습니다.')
  async deleteComment(@Param('commentId') commentId: string, @Req() req) {
    const userId = req.user.userId;
    return this.communityService.deleteComment(BigInt(commentId), userId);
  }

  // @Post('article/comment/reply')
  // @ApiOperation({ summary: '게시글 대댓글 작성' })
  // @ApiBearerAuth()
  // @ApiCreatedResponse({ description: '대댓글 작성 성공', type: CreateCommentDto })
  // async createReply(@Body() dto: CreateCommentDto, @Req() req) {
  //   const userId = req.user.userId;
  //   return await this.communityService.createReply(dto, userId);
  // }

  /* 
    대댓글 API 필요 없는 것 같아요
    대댓글은 그냥 댓글 작성할 때 parentCommentId 넣어서 작성하면 될 듯
    일단 혹시 몰라 주석 처리 해놓음
  */
}
