import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';

import { ExtractJwt, Strategy } from 'passport-jwt';

import { RegisterJwtConfig } from '@modules/auth/config/register-jwt.config';
import { RegisterJwtPayload } from '@modules/auth/types/jwt.types';

/**
 * JWT를 이용한 Guard 입니다.
 *
 * Passport의 jwt strategy에 활용됩니다.
 */
@Injectable()
export class RegisterJwtStrategy extends PassportStrategy(Strategy, 'register-jwt') {
  constructor(
    @Inject(RegisterJwtConfig.KEY)
    private registerJwtConfiguration: ConfigType<typeof RegisterJwtConfig>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromHeader('registertoken'),
      secretOrKey: registerJwtConfiguration.secret,
      ignoreExpiration: false,
    });
  }

  validate(payload: RegisterJwtPayload) {
    return payload;
  }
}
