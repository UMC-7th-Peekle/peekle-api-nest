import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';

import { GoogleOAuthConfig } from '@modules/auth/config/google-oauth-config';
import { JwtConfig } from '@modules/auth/config/jwt.config';
import { KakaoOAuthConfig } from '@modules/auth/config/kakao-oauth-config';
import { RefreshJwtConfig } from '@modules/auth/config/refresh-jwt.config';
import { JwtAuthGuard } from '@modules/auth/guards/jwt-auth.guard';
import { AuthService } from '@modules/auth/services/auth.service';
import { KakaoAuthService } from '@modules/auth/services/kakao-oauth.auth.service';
import { GoogleOAuthStrategy } from '@modules/auth/strategies/google-oauth.strategy';
import { UsersModule } from '@modules/users/users.module';

import { AuthController } from './auth.controller';

@Module({
  imports: [
    UsersModule,
    JwtModule.registerAsync(JwtConfig.asProvider()),
    ConfigModule.forFeature(JwtConfig),
    ConfigModule.forFeature(RefreshJwtConfig),
    ConfigModule.forFeature(GoogleOAuthConfig),
    ConfigModule.forFeature(KakaoOAuthConfig),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    KakaoAuthService,
    GoogleOAuthStrategy,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AuthModule {}
