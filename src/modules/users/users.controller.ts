import { Controller, Get, Patch } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('me')
  getUserInfo() {
    return { message: '사용자 정보 조회 (GET /users/me)' };
  }

  @Get('terms')
  getTermsHistory() {
    return { message: '약관 동의 내역 조회 (GET /users/terms)' };
  }

  @Patch('terms')
  updateTermsAgreement() {
    return { message: '약관 동의 내역 수정 (PATCH /users/terms)' };
  }

  @Get('support/info')
  getSupportInfo() {
    return { message: '고객센터 운영 정보 조회 (GET /users/support/info)' };
  }
}