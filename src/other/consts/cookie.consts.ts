import type { CookieOptions } from 'express';

export const ACCESS_TOKEN_COOKIE = 'access_token';

export const ACCESS_TOKEN_MAX_AGE_MS = 24 * 60 * 60 * 1000;

export function accessTokenCookieOptions(): CookieOptions {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
  }
}
