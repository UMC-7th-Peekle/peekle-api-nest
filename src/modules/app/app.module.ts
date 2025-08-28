import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ResponseInterceptor } from '@common/interceptors/response.interceptor';

import { AuthModule } from '@modules/auth/auth.module';
import { CommunityModule } from '@modules/community/community.module';
import { EventsModule } from '@modules/events/events.module';
import { PrismaModule } from '@modules/prisma/prisma.module';
import { UsersModule } from '@modules/users/users.module';

import { AppController } from './app.controller';

@Module({
  imports: [
    UsersModule,
    PrismaModule,
    AuthModule,
    EventsModule,
    CommunityModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', `.env.${process.env.NODE_ENV}`, '.env'],
    }),
  ],
  controllers: [AppController],
  providers: [ResponseInterceptor],
})
export class AppModule {}
