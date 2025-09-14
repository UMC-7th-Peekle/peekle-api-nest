import { Controller, Get, Query, Req, VERSION_NEUTRAL } from '@nestjs/common';
import { ApiCookieAuth, ApiOperation, ApiQuery } from '@nestjs/swagger';

import { ResponseMessage } from '@common/decorators/response-message-decorator';

import { Public } from '@modules/auth/decorators/public.decorator';
import { AuthService } from '@modules/auth/services/auth.service';

@Controller({
  version: VERSION_NEUTRAL,
  path: 'auth',
})
export class AuthTestController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({
    summary: '토큰 검증 API',
    description: 'GET 요청을 보냈을 때 JwtGuard를 통과했는지 확인합니다.',
  })
  @ApiCookieAuth()
  @Get('protected')
  @ResponseMessage('JWT Guard를 Pass 했습니다.')
  async tokenCheck(@Req() req) {
    const { userId, name, nickname } = req.user;

    return {
      userId: userId.toString(),
      name,
      nickname,
    };
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
}
