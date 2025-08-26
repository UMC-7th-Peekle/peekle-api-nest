import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';

import { ExtractJwt, Strategy } from 'passport-jwt';

import { JwtConfig } from '@modules/auth/config/jwt.config';
import { AuthService } from '@modules/auth/services/auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(JwtConfig.KEY)
    private jwtConfiguration: ConfigType<typeof JwtConfig>,
    private authService: AuthService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtConfiguration.secret as string,
      ignoreExpiration: false,
    });
  }

  validate(payload) {
    return true;
  }
}
