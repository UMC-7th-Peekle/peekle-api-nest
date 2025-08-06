import { Test, TestingModule } from '@nestjs/testing';

import { AuthController } from './auth.controller';

describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return kakao register message', () => {
    expect(controller.registerKakao()).toEqual({
      message: '카카오 회원가입 (POST /auth/register/kakao)',
    });
  });

  it('should return terms message', () => {
    expect(controller.getTerms()).toEqual({
      message: '회원가입 시 약관 조회 (GET /auth/terms)',
    });
  });

  it('should return kakao login message', () => {
    expect(controller.loginKakao()).toEqual({
      message: '카카오 로그인 (GET /auth/login/kakao)',
    });
  });

  it('should return kakao callback message', () => {
    expect(controller.kakaoLoginCallback()).toEqual({
      message: '카카오 로그인 Callback (GET /auth/login/kakao/callback)',
    });
  });

  it('should return logout message', () => {
    expect(controller.logout()).toEqual({
      message: '로그아웃 (DELETE /auth/logout)',
    });
  });

  it('should return token reissue message', () => {
    expect(controller.reissueToken()).toEqual({
      message: 'RT 이용한 AT 재발급 (GET /auth/token/reissue)',
    });
  });

  it('should return phone send message', () => {
    expect(controller.sendPhoneCode()).toEqual({
      message: '휴대폰 인증번호 발송 (POST /auth/phone/send)',
    });
  });

  it('should return phone verify message', () => {
    expect(controller.verifyPhoneCode()).toEqual({
      message: '휴대폰 인증번호 확인 (POST /auth/phone/verify)',
    });
  });

  it('should return phone status message', () => {
    expect(controller.phoneStatus()).toEqual({
      message: '전화번호 인증 상태 확인 (GET /auth/phone/status)',
    });
  });
});
