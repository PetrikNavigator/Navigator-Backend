import { applyDecorators } from '@nestjs/common';
import {
    ApiOkResponse,
    ApiOperation,
    ApiTags,
    ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { ApiAuthCookie, ApiServerError, ApiValidationFailure } from './common.decorators';

export const ApiAuthController = () => ApiTags('Auth');

export const ApiLogin = () =>
    applyDecorators(
        ApiOperation({
            summary: 'Log in with email and password',
            description:
                'Validates credentials and sets an HttpOnly `access_token` cookie ' +
                '(SameSite=Lax, 24h lifetime). The response body is empty on success.',
        }),
        ApiOkResponse({
            description: 'Cookie issued. Body is empty.',
        }),
        ApiValidationFailure(),
        ApiUnauthorizedResponse({
            description: 'email/password combination is incorrect.',
        }),
        ApiServerError(),
    );

export const ApiGetMe = () =>
    applyDecorators(
        ApiOperation({
            summary: 'Return the current admin profile',
            description:
                'Returns the admin record for the authenticated session. ' +
                'If the user backing the cookie no longer exists, the cookie is cleared and 401 is returned.',
        }),
        ApiOkResponse({
            description: 'Current admin profile.',
            schema: {
                type: 'object',
                properties: {
                    id: { type: 'string', example: '1' },
                    email: { type: 'string', example: 'admin' },
                    role: { type: 'string', enum: ['ADMIN', 'PREMISE_ADMIN'] },
                    premises: {
                        type: 'array',
                        items: { type: 'string', example: '1' },
                    },
                },
            },
        }),
        ApiServerError(),
    );

export const ApiLogout = () =>
    applyDecorators(
        ApiAuthCookie(),
        ApiOperation({
            summary: 'Clear the access_token cookie',
            description: 'Invalidates the session by clearing the `access_token` cookie on the client.',
        }),
        ApiOkResponse({
            description: 'Logged out.',
            schema: {
                type: 'object',
                properties: {
                    message: { type: 'string', example: 'Logged out successfully!' },
                },
            },
        }),
        ApiServerError(),
    );
