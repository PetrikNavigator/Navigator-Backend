import { CanActivate, ExecutionContext, HttpException, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { AuthenticatedRequest } from "src/other/types/admin-types";
import { PrismaService } from "src/other/prisma/prisma.service";
import { ACCESS_TOKEN_COOKIE, accessTokenCookieOptions } from "src/other/consts/cookie.consts";
import express from "express"

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private readonly jwt: JwtService,
        private readonly config: ConfigService,
        private readonly prisma: PrismaService
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest<AuthenticatedRequest>()
        const response = context.switchToHttp().getResponse<express.Response>()
        const token = this.extract_token_from_header(request)

        if (token === undefined) {
            throw new UnauthorizedException("No token provided!")
        }

        try {
            const payload = await this.jwt.verifyAsync(
                token,
                {
                    secret: this.config.get<string>('JWT_SECRET')
                }
            )

            const id = payload.id as bigint
            if (!id) {
                throw new UnauthorizedException("No id in payload!")
            }

            const admin = await this.prisma.users.findFirst({ where: { id } })
            if (!admin)
                throw new UnauthorizedException("No admin in database!")
            const {password_hash, ...rest} = admin
            request.user = rest
        } catch (error: any) {
            this.removeCookie(response)
            const err = error as HttpException
            throw new UnauthorizedException(err.message)
        }

        return true
    }

    private extract_token_from_header(request: AuthenticatedRequest): string | undefined {
        if (request.cookies?.[ACCESS_TOKEN_COOKIE]) {
            return request.cookies[ACCESS_TOKEN_COOKIE]
        }

        const authHeader = request.headers.authorization
        if (authHeader && authHeader.startsWith('Bearer ')) {
            return authHeader.substring(7)
        }

        return undefined
    }

    private removeCookie(response: express.Response) {
        response.clearCookie(ACCESS_TOKEN_COOKIE, accessTokenCookieOptions())
    }
}