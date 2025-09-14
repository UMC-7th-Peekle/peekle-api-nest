import { Controller, Delete } from '@nestjs/common';

import { ResponseMessage } from '@common/decorators/response-message-decorator';

@Controller({
  version: '1',
  path: 'auth',
})
export class AuthV1Controller {
  constructor() {}

  @Delete('logout')
  @ResponseMessage('성공적으로 로그아웃 되었습니다.')
  logout() {
    return;
  }
}
