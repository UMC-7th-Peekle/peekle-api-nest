import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ResponseInterceptor } from '@common/interceptors/response.interceptor';

import { AuthModule } from '@modules/auth/auth.module';
import { PrismaModule } from '@modules/prisma/prisma.module';
import { UsersModule } from '@modules/users/users.module';

import { AppController } from './app.controller';

@Module({
  imports: [
    UsersModule,
    PrismaModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [ResponseInterceptor],
})
export class AppModule {}
