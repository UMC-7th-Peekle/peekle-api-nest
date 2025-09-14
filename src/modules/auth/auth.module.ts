import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';

import { JwtConfig } from '@modules/auth/config/jwt.config';
import { AuthV1Controller } from '@modules/auth/controllers/v1/auth.v1.controller';
import { OAuthV1Controller } from '@modules/auth/controllers/v1/oauth.v1.controller';
import { AuthTestController } from '@modules/auth/controllers/version-neutral/test.auth.controller';
import { JwtAuthGuard } from '@modules/auth/guards/jwt-auth.guard';
import { AuthService } from '@modules/auth/services/auth.service';
import { KakaoAuthService } from '@modules/auth/services/kakao-oauth.auth.service';
import { GoogleOAuthStrategy } from '@modules/auth/strategies/google-oauth.strategy';
import { JwtStrategy } from '@modules/auth/strategies/jwt.strategy';
import { RegisterJwtStrategy } from '@modules/auth/strategies/register.jwt.strategy';
import { UsersModule } from '@modules/users/users.module';

@Module({
  imports: [UsersModule, JwtModule.registerAsync(JwtConfig.asProvider())],
  controllers: [AuthV1Controller, OAuthV1Controller, AuthTestController],
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
