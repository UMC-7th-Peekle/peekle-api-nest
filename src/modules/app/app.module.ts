import { Module } from '@nestjs/common';

import { AuthModule } from '@modules/auth/auth.module';
import { PrismaModule } from '@modules/prisma/prisma.module';
import { UsersModule } from '@modules/users/users.module';

import { AppController } from './app.controller';

@Module({
  imports: [UsersModule, PrismaModule, AuthModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
