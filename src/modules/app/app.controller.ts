import { Controller, Get, VERSION_NEUTRAL, Version } from '@nestjs/common';

import { Public } from '@modules/auth/decorators/public.decorator';

@Controller()
export class AppController {
  @Public()
  @Get()
  // @Version(['1.1', '1.2'])
  @Version(VERSION_NEUTRAL)
  getHello(): string {
    return 'Hello World!';
  }
}
