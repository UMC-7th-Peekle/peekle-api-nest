import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Param,
  Post,
  Query,
  Redirect,
  Req,
  Res,
  UseGuards,
  Version,
} from '@nestjs/common';
import { ApiHeader, ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';

import { Request, Response } from 'express';

import { CookieName } from '@common/constants/cookie.constants';
import { BypassResponseInterceptor } from '@common/decorators/bypass-response-interceptor.decorator';

import {
  accessTokenCookieOptions,
  refreshTokenCookieOptions,
} from '@modules/auth/config/cookie.config';
import { Public } from '@modules/auth/decorators/public.decorator';
import { GoogleOAuthGuard } from '@modules/auth/guards/google-oauth.guard';
import { RegisterJwtGuard } from '@modules/auth/guards/register-jwt.guard';
import { AuthService } from '@modules/auth/services/auth.service';
import { GoogleOAuthService } from '@modules/auth/services/google-oauth.service';
import { KakaoAuthService } from '@modules/auth/services/kakao-oauth.auth.service';
import { CreateOAuthUserRequestDto } from '@modules/users/dto/user.dto';
import { OAuthUserService } from '@modules/users/services/oauth.users.service';

@Controller({
  version: '1',
  path: 'auth',
})
export class OAuthV1Controller {
  constructor(
    private readonly authService: AuthService,
    private readonly oauthUserService: OAuthUserService,
    private readonly kakaoUserService: KakaoAuthService,
    private readonly googleService: GoogleOAuthService,
  ) {}

  @ApiOperation({
    summary: 'OAuth 사용자 회원가입',
    description: `## v1.0 2025-09-15
    \nOAuth로 Login 했을 시에 \`type=register\` 로 응답이 온 사용자 (가입되지 않은 사용자) 가 회원가입을 하기 위한 API 입니다.
    \n로그인 시도 시에 제공된 \`registerToken\`을 헤더에 담아 요청해 주세요.
    \n`,
  })
  // @ApiBearerAuth()
  @ApiHeader({
    name: 'RegisterToken', // 실제 헤더의 key
    description: 'Bearer Token이 아닙니다. RegisterToken 평문 그대로 요청을 보내주세요.',
    required: true,
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
  })
  @Public()
  @UseGuards(RegisterJwtGuard)
  @Post('oauth/register')
  async oauthRegister(@Req() req: any, @Body() user: CreateOAuthUserRequestDto) {
    console.log(user);
    return this.oauthUserService.createOAuthUser({ ...req.user, ...user });
  }

  // ============= Google OAuth =============

  @ApiOperation({
    summary: 'Google OAuth 로그인',
    description: `## v1.0 2025-09-15
    \nGoogle 계정 로그인 페이지로 Redirect 되는 API 입니다.
    \n로그인 시에 자동으로 \`/auth/google/callback\` 으로 Redirect 됩니다.
    \nCallback URI는 FE에서 직접 접근하지 않습니다.
\n[LOCAL](http://localhost:7777/v1/auth/google/login) [REMOTE](https://api.peekle.kr/v1/auth/google/login)`,
    deprecated: true,
  })
  @ApiResponse({
    status: 302,
  })
  @Public()
  @UseGuards(GoogleOAuthGuard)
  @Get('google/login')
  googleLogin() {}
  //  http://localhost:7777/auth/google/login

  @ApiOperation({
    summary: '[FE 직접 접근 X] Google OAuth Callback',
    description: `## v1.0 2025-09-15
    \nFE에서 직접 접근하는 API가 아닙니다.`,
    deprecated: true,
  })
  @Public()
  @Get('google/callback')
  @UseGuards(GoogleOAuthGuard)
  async googleCallback(@Req() req: any, @Res({ passthrough: true }) res: Response) {
    console.log('Google OAuth Callback:', req.user);

    const result = await this.oauthUserService.oauthLoginOrRegister(req.user);

    if (result.type === 'login') {
      res.cookie(CookieName.ACCESS_TOKEN, result.tokens.accessToken, accessTokenCookieOptions);
      res.cookie(CookieName.REFRESH_TOKEN, result.tokens.refreshToken, refreshTokenCookieOptions);
    }

    res.redirect(this.authService.generateOAuthRedirectUrl(result));

    // return result;
  }

  // http://localhost:7777/v2/auth/google/login?frontEnv=local
  // http://localhost:7777/v2/auth/google/login?frontEnv=development
  // http://localhost:7777/v2/auth/google/login?frontEnv=production
  // &redirectUri=http://localhost:7777/v2/auth/google/callback
  @ApiQuery({
    name: 'redirectUri',
    required: false,
    description: 'Server Redirect URI 입니다. FE측에서는 사용할 필요 없습니다.',
  })
  @ApiQuery({
    name: 'frontEnv',
    required: true,
    description: 'Frontend 환경 구분자 (local, development, production)',
    example: 'local',
    enum: ['local', 'development', 'production'],
  })
  @Public()
  @Version('2')
  @Get('google/login')
  manualGoogleLogin(
    @Query() query: { frontEnv: string; redirectUri?: string },
    @Res() res: Response,
  ) {
    if (!['production', 'development', 'local'].includes(query.frontEnv)) {
      throw new InternalServerErrorException('frontEnv 값이 올바르지 않습니다.');
    }
    return res.redirect(this.googleService.getGoogleOAuthUrlV2(query.frontEnv));
  }

  @Public()
  @Version('2')
  @Get('google/callback')
  @ApiOperation({
    summary: 'Google OAuth 수동 Callback',
    description:
      'code는 Google 로그인 후 redirect 된 곳에서 Query에 담긴 code를 전송해주세요.\nredirectUri은 login 시에 제공한 값과 동일한 값을 사용하여야 합니다.',
  })
  async manualGoogleCallback(
    @Query() query: { state: 'production' | 'development' | 'local'; code: string },
    @Res() res: Response,
  ) {
    const googleToken = await this.googleService.getGoogleTokenV2(query.code);
    if (!googleToken.tokens.id_token) {
      throw new InternalServerErrorException('Google ID Token not found');
    }
    const user = await this.googleService.verifyGoogleToken(googleToken.tokens.id_token);

    // 전달된 state에 따라서 redirectUri 구분
    const result = await this.oauthUserService.oauthLoginOrRegister(user);

    res.redirect(this.authService.generateOAuthRedirectUrl(result, query.state));
  }

  // ============= Kakao OAuth =============

  @ApiOperation({
    summary: 'Kakao OAuth 로그인',
    description: `## v1.1 2025-10-27
    \n Kakao 계정 로그인 페이지로 이동합니다.
    \n frontEnv Query에 local/development/production 값을 담아 요청해 주세요.
    \n[LOCAL](http://localhost:7777/v1/auth/kakao/login) [REMOTE](https://api.peekle.kr/v1/auth/kakao/login)`,
  })
  @ApiQuery({
    name: 'frontEnv',
    required: true,
    description: 'Frontend 환경 구분자 (local, development, production)',
    example: 'local',
    enum: ['local', 'development', 'production'],
  })
  @ApiResponse({
    status: 302,
  })
  @Public()
  @Redirect()
  @Get('kakao/login')
  @BypassResponseInterceptor()
  kakaoLogin(@Query('frontEnv') frontEnv: string, @Req() req: Request) {
    //  http://localhost:7777/v1/auth/kakao/login?frontEnv=local
    //  http://localhost:7777/v1/auth/kakao/login?frontEnv=development
    //  http://localhost:7777/v1/auth/kakao/login?frontEnv=production
    //  https://api.peekle.kr/v1/auth/kakao/login

    // const setRedirectUrlByHost = `https://${req.header('host')}/v1/auth/kakao/callback`;
    // console.log('Kakao Login Redirect URL:', setRedirectUrlByHost);
    return this.kakaoUserService.getKakaoRedirectUrl(frontEnv);
  }

  @ApiOperation({
    summary: '[FE 직접 접근 X] Kakao OAuth Callback',
    description: `## v1.1 2025-10-27
    \nFE에서 직접 접근하는 API가 아닙니다.`,
  })
  @ApiResponse({
    status: 302,
  })
  @Public()
  @Get('kakao/callback')
  async kakaoCallback(
    @Query('code') code: string,
    @Query('state') state: 'production' | 'development' | 'local',
    @Req() req: Request,
    @Res() res: Response,
  ) {
    this.kakaoUserService.checkAuthorizationCode(code);
    const kakaoAccessToken = await this.kakaoUserService.getKakaoAccessToken(code);
    const kakaoUserInfo = await this.kakaoUserService.getKakaoUserInfo(kakaoAccessToken);

    const result = await this.oauthUserService.oauthLoginOrRegister(kakaoUserInfo);

    if (result.type === 'login') {
      res.cookie(CookieName.ACCESS_TOKEN, result.tokens.accessToken, accessTokenCookieOptions);
      res.cookie(CookieName.REFRESH_TOKEN, result.tokens.refreshToken, refreshTokenCookieOptions);
    }
    // TODO: Cookie 설정 관련 test code
    // else if (result.type === 'register') {
    //   res.cookie('TEST', 'register token', accessTokenCookieOptions);
    // }

    // 요청 url
    // const requestUrl = "https" + '://' + req.
    res.redirect(this.authService.generateOAuthRedirectUrl(result, state));
  }
}
