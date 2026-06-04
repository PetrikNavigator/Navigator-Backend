import { applyDecorators } from '@nestjs/common';
import {
    ApiBadRequestResponse,
    ApiCookieAuth,
    ApiForbiddenResponse,
    ApiInternalServerErrorResponse,
    ApiNotFoundResponse,
    ApiUnauthorizedResponse,
} from '@nestjs/swagger';

export const ApiAuthCookie = () =>
    applyDecorators(
        ApiCookieAuth('access_token'),
        ApiUnauthorizedResponse({
            description: 'Missing or invalid `access_token` cookie.',
        }),
    );

export const ApiAdminOnly = () =>
    applyDecorators(
        ApiAuthCookie(),
        ApiForbiddenResponse({
            description: 'Authenticated, but the caller does not have the ADMIN role.',
        }),
    );

export const ApiValidationFailure = () =>
    ApiBadRequestResponse({
        description: 'Request payload failed class-validator checks.',
    });

export const ApiResourceNotFound = (resource: string) =>
    ApiNotFoundResponse({
        description: `${resource} was not found, or the caller does not own its premise.`,
    });

export const ApiServerError = () =>
    ApiInternalServerErrorResponse({
        description: 'Unexpected server-side error.',
    });
