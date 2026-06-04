import { Controller, Get, Post, Body, Res, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import express from 'express'
import type { AuthenticatedRequest } from 'src/other/types/admin-types';
import { AuthGuard } from './auth.guard';
import {
  ApiAuthController,
  ApiGetMe,
  ApiLogin,
  ApiLogout,
} from 'src/other/decorators/documentation/auth.decorators';
import {
  ACCESS_TOKEN_COOKIE,
  ACCESS_TOKEN_MAX_AGE_MS,
  accessTokenCookieOptions,
} from 'src/other/consts/cookie.consts';

@ApiAuthController()
@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post("login")
  @ApiLogin()
  async login(
    @Body() body: LoginDto,
    @Res({ passthrough: true }) res: express.Response
  ) {
    const result = await this.authService.login(body.email, body.password)

    res.cookie(ACCESS_TOKEN_COOKIE, result.access_token, {
      ...accessTokenCookieOptions(),
      maxAge: ACCESS_TOKEN_MAX_AGE_MS,
    })

    return result.user
  }

  @Get("me")
  @UseGuards(AuthGuard)
  @ApiGetMe()
  async getMe(
    @Req() request: AuthenticatedRequest
  ) {
    return request.user
  }

  @Post("/logout")
  @UseGuards(AuthGuard)
  @ApiLogout()
  async logout(@Res({ passthrough: true }) response: express.Response) {
    response.clearCookie(ACCESS_TOKEN_COOKIE, accessTokenCookieOptions())

    return { message: "Logged out successfully!" }
  }
}
