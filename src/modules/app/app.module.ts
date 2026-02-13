import { MiddlewareConsumer, Module, NestModule, ValidationPipe } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { ScheduleModule } from '@nestjs/schedule';

import cookieParser from 'cookie-parser';
import { WinstonModule } from 'nest-winston';

import { winstonLoggerOptions } from '@common/configs/winston.config';
import { GlobalExceptionFilter } from '@common/filters/http-exception.filter';
import { ResponseInterceptor } from '@common/interceptors/response.interceptor';
import { LoggerMiddleware } from '@common/middleware/logger.middleware';
import { RequestContextMiddleware } from '@common/middleware/request-context.middleware';

import { AuthModule } from '@modules/auth/auth.module';
import { FrontendUrlConfig } from '@modules/auth/config/frontend-url.config';
import { GoogleOAuthConfig } from '@modules/auth/config/google-oauth-config';
import { JwtConfig } from '@modules/auth/config/jwt.config';
import { KakaoOAuthConfig } from '@modules/auth/config/kakao-oauth-config';
import { RefreshJwtConfig } from '@modules/auth/config/refresh-jwt.config';
import { RegisterJwtConfig } from '@modules/auth/config/register-jwt.config';
import { configValidationSchema } from '@modules/auth/schemas/validation.schema';
import { AwsModule } from '@modules/aws/aws.module';
import { AwsConfig } from '@modules/aws/configs/aws.config';
import { CommunityModule } from '@modules/community/community.module';
import { EventsModule } from '@modules/events/events.module';
import { PrismaModule } from '@modules/prisma/prisma.module';
import { UsersModule } from '@modules/users/users.module';

import { AppController } from './app.controller';

const validate = (config: Record<string, unknown>) => {
  const parsedConfig = configValidationSchema.parse(config);
  // console.log('Validated Config:', parsedConfig);
  return parsedConfig;
};

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', `.env.${process.env.NODE_ENV}`, '.env'],
      load: [
        AwsConfig,
        GoogleOAuthConfig,
        KakaoOAuthConfig,
        JwtConfig,
        RefreshJwtConfig,
        RegisterJwtConfig,
        FrontendUrlConfig,
      ],
      validate,
    }),
    WinstonModule.forRoot(winstonLoggerOptions),
    ScheduleModule.forRoot(),
    UsersModule,
    PrismaModule,
    AuthModule,
    EventsModule,
    CommunityModule,
    AwsModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        transform: true,
        // DTO에 정의되지 않은 속성은 자동으로 제거합니다.
        whitelist: true,
        // DTO에 정의되지 않은 속성이 들어오면 에러를 발생시킵니다.
        forbidNonWhitelisted: true,
      }),
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cookieParser(), RequestContextMiddleware, LoggerMiddleware).forRoutes('*');
  }
}
