import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';

import { JwtConfig } from '@modules/auth/config/jwt.config';
import { JwtAuthGuard } from '@modules/auth/guards/jwt-auth.guard';
import { AuthService } from '@modules/auth/services/auth.service';
import { KakaoAuthService } from '@modules/auth/services/kakao-oauth.auth.service';
import { GoogleOAuthStrategy } from '@modules/auth/strategies/google-oauth.strategy';
import { JwtStrategy } from '@modules/auth/strategies/jwt.strategy';
import { RegisterJwtStrategy } from '@modules/auth/strategies/register.jwt.strategy';
import { UsersModule } from '@modules/users/users.module';

import { AuthControllerV1 } from './controllers/auth.v1.controller';

@Module({
  imports: [UsersModule, JwtModule.registerAsync(JwtConfig.asProvider())],
  controllers: [AuthControllerV1],
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
