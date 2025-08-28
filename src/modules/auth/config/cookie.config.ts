import { CookieOptions } from 'express';

// sameSite: None 을 위해서는 secure: true가 필수적입니다

const ONE_MINUTE = 60 * 1000;
const ONE_HOUR = 60 * 60 * 1000;

export const accessTokenCookieOptions: CookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax',
  maxAge: ONE_MINUTE * 15, // 15 minutes
};

export const refreshTokenCookieOptions: CookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax',
  maxAge: ONE_HOUR, // 14 days
};
