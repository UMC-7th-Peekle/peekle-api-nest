import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';

import { GoogleOAuthConfig } from '@modules/auth/config/google-oauth-config';
import { JwtConfig } from '@modules/auth/config/jwt.config';
import { KakaoOAuthConfig } from '@modules/auth/config/kakao-oauth-config';
import { RefreshJwtConfig } from '@modules/auth/config/refresh-jwt.config';
import { RegisterJwtConfig } from '@modules/auth/config/register-jwt.config';
import { JwtAuthGuard } from '@modules/auth/guards/jwt-auth.guard';
import { AuthService } from '@modules/auth/services/auth.service';
import { KakaoAuthService } from '@modules/auth/services/kakao-oauth.auth.service';
import { GoogleOAuthStrategy } from '@modules/auth/strategies/google-oauth.strategy';
import { JwtStrategy } from '@modules/auth/strategies/jwt.strategy';
import { RegisterJwtStrategy } from '@modules/auth/strategies/register.jwt.strategy';
import { UsersModule } from '@modules/users/users.module';

import { AuthController } from './auth.controller';

@Module({
  imports: [
    UsersModule,
    JwtModule.registerAsync(JwtConfig.asProvider()),
    ConfigModule.forFeature(JwtConfig),
    ConfigModule.forFeature(RefreshJwtConfig),
    ConfigModule.forFeature(RegisterJwtConfig),
    ConfigModule.forFeature(GoogleOAuthConfig),
    ConfigModule.forFeature(KakaoOAuthConfig),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    KakaoAuthService,
    JwtStrategy,
    GoogleOAuthStrategy,
    RegisterJwtStrategy,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AuthModule {}
