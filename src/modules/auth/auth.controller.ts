import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Redirect,
  Req,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';

import { Response } from 'express';

import { CookieName } from '@common/constants/cookie.constants';
import { BypassResponseInterceptor } from '@common/decorators/bypass-response-interceptor.decorator';
import { ResponseMessage } from '@common/decorators/response-message-decorator';

import {
  accessTokenCookieOptions,
  refreshTokenCookieOptions,
} from '@modules/auth/config/cookie.config';
import { Public } from '@modules/auth/decorators/public.decorator';
import { GoogleOAuthGuard } from '@modules/auth/guards/google-oauth.guard';
import { RegisterJwtGuard } from '@modules/auth/guards/register-jwt.guard';
import { AuthService } from '@modules/auth/services/auth.service';
import { KakaoAuthService } from '@modules/auth/services/kakao-oauth.auth.service';
import {
  CreateOAuthUserRequestDto,
  CreateUserRequestDto,
  LoginRequestDto,
} from '@modules/users/dto/user.dto';
import { OAuthUserService } from '@modules/users/services/oauth.users.service';
import { UsersService } from '@modules/users/services/users.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
    private readonly oauthUserService: OAuthUserService,
    private readonly kakaoUserService: KakaoAuthService,
  ) {}

  @ApiOperation({
    summary: '회원가입 API 입니다.',
    description: 'CreateUser 형식을 받아서, 새로운 사용자를 생성합니다.',
  })
  @Public()
  @Post('register')
  async register(@Body() user: CreateUserRequestDto) {
    return this.usersService.createUser(user);
  }

  @ApiOperation({
    summary: 'OAuth 회원가입 API 입니다.',
    description: 'OAuth로 회원가입을 하고자 하는 사용자의 나머지 정보를 받아서 가입을 처리합니다.',
  })
  @ApiBearerAuth()
  @Public()
  @UseGuards(RegisterJwtGuard)
  @ResponseMessage('OAuth를 통한 회원가입에 성공했습니다.')
  @Post('oauth/register')
  async oauthRegister(@Req() req, @Body() user: CreateOAuthUserRequestDto) {
    return this.oauthUserService.createOAuthUser({ ...req.user, ...user });
  }

  @Public()
  @Post('login')
  async login(@Body() loginRequest: LoginRequestDto) {
    return { message: 'Login successful' };
  }

  @ApiOperation({
    summary: '토큰 검증 API',
    description: 'GET 요청을 보냈을 때 JwtGuard를 통과했는지 확인합니다.',
  })
  @ApiBearerAuth()
  @Get('protected')
  @ResponseMessage('JWT Guard를 Pass 했습니다.')
  async tokenCheck() {
    return;
  }

  @ApiOperation({
    summary: '테스트 토큰 생성 API',
    description: 'Query String으로 userId를 첨부하세요.',
  })
  @ApiQuery({
    name: 'userId',
    required: true,
    description: '토큰을 생성할 사용자 ID',
    example: '1',
  })
  @Public()
  @Get('test-token')
  async getTestToken(@Query('userId') userId: string) {
    return this.authService.generateTokens(BigInt(userId));
  }

  @ApiOperation({ summary: 'Google 인증 페이지로 이동 (로그인 시작)' })
  @ApiResponse({
    status: 302,
    description: 'Google 로그인 페이지로 리다이렉트',
  })
  @Public()
  @UseGuards(GoogleOAuthGuard)
  @Get('google/login')
  googleLogin() {}
  //  http://localhost:7777/auth/google/login

  @ApiOperation({ summary: 'Google 콜백: 사용자 인증 후 토큰 발급' })
  @ApiResponse({
    status: 302,
    description: '프론트엔드로 토큰을 포함한 URL로 리다이렉트',
  })
  @Public()
  @Get('google/callback')
  @UseGuards(GoogleOAuthGuard)
  async googleCallback(@Request() req: any, @Res({ passthrough: true }) res: Response) {
    console.log('Google OAuth Callback:', req.user);

    const result = await this.oauthUserService.oauthLoginOrRegister(req.user);

    if (result.type === 'login') {
      res.cookie(CookieName.ACCESS_TOKEN, result.tokens.accessToken, accessTokenCookieOptions);
      res.cookie(CookieName.REFRESH_TOKEN, result.tokens.refreshToken, refreshTokenCookieOptions);
    }

    return result;
  }

  @ApiOperation({ summary: 'Kakao 인증 페이지로 이동 (로그인 시작)' })
  @ApiResponse({
    status: 302,
    description: 'Kakao 로그인 페이지로 리다이렉트',
  })
  @Public()
  @Redirect()
  @Get('kakao/login')
  @BypassResponseInterceptor()
  kakaoLogin() {
    //  http://localhost:7777/auth/kakao/login
    return this.kakaoUserService.getKakaoRedirectUrl();
  }

  @ApiOperation({ summary: 'Kakao 콜백: 사용자 인증 후 토큰 발급' })
  @ApiResponse({
    status: 302,
    description: '프론트엔드로 토큰을 포함한 URL로 리다이렉트',
  })
  @Public()
  @Get('kakao/callback')
  async kakaoCallback(@Query('code') code: string, @Res({ passthrough: true }) res: Response) {
    this.kakaoUserService.checkAuthorizationCode(code);
    const kakaoAccessToken = await this.kakaoUserService.getKakaoAccessToken(code);
    const kakaoUserInfo = await this.kakaoUserService.getKakaoUserInfo(kakaoAccessToken);

    const result = await this.oauthUserService.oauthLoginOrRegister(kakaoUserInfo);

    if (result.type === 'login') {
      res.cookie(CookieName.ACCESS_TOKEN, result.tokens.accessToken, accessTokenCookieOptions);
      res.cookie(CookieName.REFRESH_TOKEN, result.tokens.refreshToken, refreshTokenCookieOptions);
    }

    return result;
  }
}
