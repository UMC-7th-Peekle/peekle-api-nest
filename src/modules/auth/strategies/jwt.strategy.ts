import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';

import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { CookieName } from '@common/constants/cookie.constants';

import { JwtConfig } from '@modules/auth/config/jwt.config';
import { NoJwtTokenException } from '@modules/auth/exceptions/jwt.exeption';
import { AuthService } from '@modules/auth/services/auth.service';
import { JwtPayload } from '@modules/auth/types/jwt.types';

/**
 * JWT를 이용한 Guard 입니다.
 *
 * Passport의 jwt strategy에 활용됩니다.
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    @Inject(JwtConfig.KEY)
    private jwtConfiguration: ConfigType<typeof JwtConfig>,
    private authService: AuthService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtConfiguration.secret,
      ignoreExpiration: false,
    });
  }

  validate(payload: JwtPayload) {
    const userId = payload.userId;

    return this.authService.validateJwtUser(BigInt(userId));
  }
}
