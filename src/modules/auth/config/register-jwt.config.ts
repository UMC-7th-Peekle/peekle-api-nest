import { registerAs } from '@nestjs/config';
import { JwtSignOptions } from '@nestjs/jwt';

export const RegisterJwtConfig = registerAs('register-jwt', () => ({
  secret: process.env.REGISTER_JWT_SECRET as string,
  expiresIn: process.env.REGISTER_JWT_EXPIRES_IN as string,
}));
