import { registerAs } from '@nestjs/config';
import { JwtSignOptions } from '@nestjs/jwt';

export const RefreshJwtConfig = registerAs(
  'refresh-jwt',
  (): JwtSignOptions => ({
    secret: process.env.REFRESH_JWT_SECRET,
    expiresIn: process.env.REFRESH_JWT_EXPIRES_IN,
  }),
);
