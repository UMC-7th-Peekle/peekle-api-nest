import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

import { CreateUserRequestDto } from '@modules/users/dto/create-user';
import { UsersService } from '@modules/users/users.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({
    summary: '회원가입 API 입니다.',
    description: 'CreateUser 형식을 받아서, 새로운 사용자를 생성합니다.',
  })
  @Post('register')
  async register(@Body() user: CreateUserRequestDto) {
    console.log(user);
    return this.usersService.createUser(user);
  }
}
