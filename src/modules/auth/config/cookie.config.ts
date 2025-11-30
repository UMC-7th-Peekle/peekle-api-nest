import { CookieOptions } from 'express';

// sameSite: None 을 위해서는 secure: true가 필수적입니다

const ONE_MINUTE = 60 * 1000;
const ONE_HOUR = 60 * 60 * 1000;

const developmentOptions: CookieOptions = {
  secure: true,
  sameSite: 'none',
  domain: 'localhost',
};

const productionOptions: CookieOptions = {
  secure: true,
  sameSite: 'lax',
  domain: 'peekle.kr',
};

const cookieOptions =
  process.env.NODE_ENV === 'production' ? productionOptions : developmentOptions;

export const accessTokenCookieOptions: CookieOptions = {
  httpOnly: true,
  maxAge: ONE_MINUTE * 15, // 15 minutes,
  ...cookieOptions,
};

export const refreshTokenCookieOptions: CookieOptions = {
  httpOnly: true,
  maxAge: ONE_HOUR, // 14 days
  ...cookieOptions,
};
