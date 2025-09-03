import { registerAs } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';

export const JwtConfig = registerAs(
  'jwt',
  (): JwtModuleOptions => ({
    secret: process.env.JWT_SECRET as string,
    signOptions: { expiresIn: process.env.JWT_EXPIRES_IN as string },
  }),
);
