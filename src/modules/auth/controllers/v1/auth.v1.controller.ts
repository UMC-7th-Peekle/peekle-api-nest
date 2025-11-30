import { Controller, Delete, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiCookieAuth } from '@nestjs/swagger';

import { ResponseMessage } from '@common/decorators/response-message-decorator';

import { RegisterJwtGuard } from '@modules/auth/guards/register-jwt.guard';

@Controller({
  version: '1',
  path: 'auth',
})
export class AuthV1Controller {
  constructor() {}

  @UseGuards(RegisterJwtGuard)
  @ApiBearerAuth()
  @Post('token/reissue')
  @ResponseMessage('AccessToken이 재발급되었습니다.')
  reissueToken() {
    // TODO: RT를 이용한 AT 재발급 기능 추가 필요, Cookie로 RT 받나요 ? (2025-09-14)
    return;
  }

  @Delete('logout')
  @ResponseMessage('성공적으로 로그아웃 되었습니다.')
  logout() {
    // TODO: 쿠키 삭제 추가 & RT 무효화 기능 추가 & RT를 관리할 DB Table 설계 필요 (2025-09-14)
    return;
  }
}
