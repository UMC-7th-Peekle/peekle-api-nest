import { registerAs } from '@nestjs/config';

export const JwtConfig = registerAs('jwt', () => ({
  secret: process.env.JWT_SECRET as string,
  signOptions: { expiresIn: process.env.JWT_EXPIRES_IN as string },
}));
