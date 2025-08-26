import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

import { Public } from '@modules/auth/decorators/public.decorator';
import { GoogleOAuthGuard } from '@modules/auth/guards/google-oauth.guard';
import { AuthService } from '@modules/auth/services/auth.service';
import { CreateUserRequestDto, LoginRequestDto } from '@modules/users/dto/user.dto';
import { UsersService } from '@modules/users/services/users.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @ApiOperation({
    summary: '회원가입 API 입니다.',
    description: 'CreateUser 형식을 받아서, 새로운 사용자를 생성합니다.',
  })
  @Post('register')
  async register(@Body() user: CreateUserRequestDto) {
    console.log(user);
    return this.usersService.createUser(user);
  }

  @Post('login')
  async login(@Body() loginRequest: LoginRequestDto) {
    return { message: 'Login successful' };
  }

  @ApiOperation({
    summary: '토큰 검증 API',
    description: 'GET 요청을 보냈을 때 JwtGuard를 통과했는지 확인합니다.',
  })
  @Get('token-check')
  async tokenCheck() {
    return { message: 'JwtGuard를 PASS 했습니다.' };
  }

  @ApiOperation({ summary: 'Google 인증 페이지로 이동 (로그인 시작)' })
  @ApiResponse({
    status: 302,
    description: 'Google 로그인 페이지로 리다이렉트',
  })
  @Public()
  @UseGuards(GoogleOAuthGuard)
  // google authenticate page move
  @Get('google/login')
  googleLogin() {}
  //  http://localhost:7777/auth/google/login

  @Post('google/register')
  googleRegister() {}

  @ApiOperation({ summary: 'Google 콜백: 사용자 인증 후 토큰 발급' })
  @ApiResponse({
    status: 302,
    description: '프론트엔드로 토큰을 포함한 URL로 리다이렉트',
  })
  @Public()
  @Get('google/callback')
  @UseGuards(GoogleOAuthGuard)
  async googleCallback(@Request() req: any) {
    console.log('Google OAuth Callback:', req.user);

    const { providerId: googleUserId } = req.user;
    const response = await this.authService.authenticateWithUserId(BigInt(googleUserId));

    return response;

    // res.redirect(
    //   `${process.env.FRONTEND_URL}/v1/auth/google/callback?accessToken=${response.accessToken}&refreshToken=${response.refreshToken}`,
    // );
  }
}
