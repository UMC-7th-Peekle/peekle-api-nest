import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Post,
  Query,
  Redirect,
  Req,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ApiHeader, ApiOperation, ApiResponse } from '@nestjs/swagger';

import { Response } from 'express';

import { CookieName } from '@common/constants/cookie.constants';
import { BypassResponseInterceptor } from '@common/decorators/bypass-response-interceptor.decorator';

import {
  accessTokenCookieOptions,
  refreshTokenCookieOptions,
} from '@modules/auth/config/cookie.config';
import { Public } from '@modules/auth/decorators/public.decorator';
import { GoogleOAuthGuard } from '@modules/auth/guards/google-oauth.guard';
import { RegisterJwtGuard } from '@modules/auth/guards/register-jwt.guard';
import { KakaoAuthService } from '@modules/auth/services/kakao-oauth.auth.service';
import { CreateOAuthUserRequestDto } from '@modules/users/dto/user.dto';
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
  async oauthRegister(@Req() req, @Body() user: CreateOAuthUserRequestDto) {
    console.log(user);
    return this.oauthUserService.createOAuthUser({ ...req.user, ...user });
  }

  @ApiOperation({
    summary: 'Google OAuth 로그인',
    description: `## v1.0 2025-09-15
    \nGoogle 계정 로그인 페이지로 Redirect 되는 API 입니다.
    \n로그인 시에 자동으로 \`/auth/google/callback\` 으로 Redirect 됩니다.
    \nCallback URI는 FE에서 직접 접근하지 않습니다.
\n[LOCAL](http://localhost:7777/v1/auth/google/login) [REMOTE](https://api.peekle.kr/v1/auth/google/login)`,
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
  })
  @ApiResponse({
    status: 302,
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

  @ApiOperation({
    summary: 'Kakao OAuth 로그인',
    description: `## v1.0 2025-09-15
    \nKakao 계정 로그인 페이지로 Redirect 되는 API 입니다.
    \n로그인 시에 자동으로 \`/auth/kakao/callback\` 으로 Redirect 됩니다.
    \nCallback URI는 FE에서 직접 접근하지 않습니다.
    \n[LOCAL](http://localhost:7777/v1/auth/kakao/login) [REMOTE](https://api.peekle.kr/v1/auth/kakao/login)`,
  })
  @ApiResponse({
    status: 302,
  })
  @Public()
  @Redirect()
  @Get('kakao/login')
  @BypassResponseInterceptor()
  kakaoLogin() {
    //  http://localhost:7777/v1/auth/kakao/login
    //  https://api.peekle.kr/v1/auth/kakao/login
    return this.kakaoUserService.getKakaoRedirectUrl();
  }

  @ApiOperation({
    summary: '[FE 직접 접근 X] Kakao OAuth Callback',
    description: `## v1.0 2025-09-15
    \nGoogle 계정 로그인 페이지로 Redirect 되는 API 입니다.
    \n로그인 시에 자동으로 \`/auth/google/callback\` 으로 Redirect 됩니다.
    \nCallback URI는 FE에서 직접 접근하지 않습니다.`,
  })
  @ApiResponse({
    status: 302,
  })
  @Public()
  @Get('kakao/callback')
  async kakaoCallback(@Query('code') code: string, @Res() res: Response) {
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

    const url = this.oauthUserService.getFrontendOAuthCallbackUrl();
    console.log('Redirect URL:', url, result);

    if (result.type === 'login') {
      res.redirect(
        `${url}?type=login&oauthProvider=${result.oauthProvider}&accessToken=${result.tokens.accessToken}&refreshToken=${result.tokens.refreshToken}`,
      );
    } else if (result.type === 'register') {
      res.redirect(
        `${url}?type=register&oauthProvider=${result.oauthProvider}&registerToken=${result.tokens.registerToken}`,
      );
    } else throw new InternalServerErrorException('Something Got Wrong.');
  }
}
