import { Module } from '@nestjs/common';

import { UsersModule } from '@modules/users/users.module';

import { AuthController } from './auth.controller';

@Module({
  imports: [UsersModule],
  controllers: [AuthController],
  providers: [],
})
export class AuthModule {}
