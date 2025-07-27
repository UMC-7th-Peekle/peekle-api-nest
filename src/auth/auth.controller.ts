import { Controller, Delete, Get, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  // 카카오 회원가입
  @Post('register/kakao')
  registerKakao() {
    return { message: '카카오 회원가입 (POST /auth/register/kakao)' };
  }

  // 회원가입 시 약관 조회
  @Get('terms')
  getTerms() {
    return { message: '회원가입 시 약관 조회 (GET /auth/terms)' };
  }

  // 카카오 로그인
  @Get('login/kakao')
  loginKakao() {
    return { message: '카카오 로그인 (GET /auth/login/kakao)' };
  }

  // 카카오 로그인 Callback
  @Get('login/kakao/callback')
  kakaoLoginCallback() {
    return { message: '카카오 로그인 Callback (GET /auth/login/kakao/callback)' };
  }

  // 로그아웃
  @Delete('logout')
  logout() {
    return { message: '로그아웃 (DELETE /auth/logout)' };
  }

  // RT 이용한 Access Token 재발급
  @Get('token/reissue')
  reissueToken() {
    return { message: 'RT 이용한 AT 재발급 (GET /auth/token/reissue)' };
  }

  // 휴대폰 인증번호 발송
  @Post('phone/send')
  sendPhoneCode() {
    return { message: '휴대폰 인증번호 발송 (POST /auth/phone/send)' };
  }

  // 휴대폰 인증번호 확인
  @Post('phone/verify')
  verifyPhoneCode() {
    return { message: '휴대폰 인증번호 확인 (POST /auth/phone/verify)' };
  }

  // 휴대폰 인증 상태 확인
  @Get('phone/status')
  phoneStatus() {
    return { message: '전화번호 인증 상태 확인 (GET /auth/phone/status)' };
  }
}
