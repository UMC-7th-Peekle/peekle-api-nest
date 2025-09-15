import {
  Controller,
  Get,
  InternalServerErrorException,
  Query,
  Redirect,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

import { Response } from 'express';

import { CookieName } from '@common/constants/cookie.constants';
import { BypassResponseInterceptor } from '@common/decorators/bypass-response-interceptor.decorator';

import {
  accessTokenCookieOptions,
  refreshTokenCookieOptions,
} from '@modules/auth/config/cookie.config';
import { Public } from '@modules/auth/decorators/public.decorator';
import { GoogleOAuthGuard } from '@modules/auth/guards/google-oauth.guard';
import { KakaoAuthService } from '@modules/auth/services/kakao-oauth.auth.service';
import { OAuthUserService } from '@modules/users/services/oauth.users.service';

@Controller({
  version: '1',
  path: 'auth',
})
export class OAuthV1Controller {
  constructor(
    private readonly oauthUserService: OAuthUserService,
    private readonly kakaoUserService: KakaoAuthService,
  ) {}
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
    //  http://localhost:7777/v1/auth/kakao/login
    return this.kakaoUserService.getKakaoRedirectUrl();
  }

  @ApiOperation({ summary: 'Kakao 콜백: 사용자 인증 후 토큰 발급' })
  @ApiResponse({
    status: 302,
    description: '프론트엔드로 토큰을 포함한 URL로 리다이렉트',
  })
  @Public()
  // @Redirect()
  // @BypassResponseInterceptor()
  @Get('kakao/callback')
  async kakaoCallback(@Query('code') code: string, @Res() res: Response) {
    this.kakaoUserService.checkAuthorizationCode(code);
    const kakaoAccessToken = await this.kakaoUserService.getKakaoAccessToken(code);
    const kakaoUserInfo = await this.kakaoUserService.getKakaoUserInfo(kakaoAccessToken);

    const result = await this.oauthUserService.oauthLoginOrRegister(kakaoUserInfo);

    if (result.type === 'login') {
      res.cookie(CookieName.ACCESS_TOKEN, result.tokens.accessToken, accessTokenCookieOptions);
      res.cookie(CookieName.REFRESH_TOKEN, result.tokens.refreshToken, refreshTokenCookieOptions);
    } else if (result.type === 'register') {
      res.cookie('TEST', 'register token', accessTokenCookieOptions);
    }

    const url = this.oauthUserService.getFrontendOAuthCallbackUrl();
    console.log('Redirect URL:', url, result);

    if (result.type === 'login') {
      res.redirect(`${url}?type=login&oauthProvider=${result.oauthProvider}`);
    } else if (result.type === 'register') {
      res.redirect(
        `${url}?type=register&oauthProvider=${result.oauthProvider}&registerToken=${result.tokens.registerToken}`,
      );
    } else throw new InternalServerErrorException('Something Got Wrong.');
  }
}
