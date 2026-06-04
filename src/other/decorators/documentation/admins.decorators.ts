import { applyDecorators } from '@nestjs/common';
import {
    ApiCreatedResponse,
    ApiOperation,
    ApiQuery,
    ApiTags,
} from '@nestjs/swagger';
import {
    ApiAdminOnly,
    ApiAuthCookie,
    ApiServerError,
    ApiValidationFailure,
} from './common.decorators';

export const ApiAdminsController = () => ApiTags('Admins');

export const ApiAddAdmin = () =>
    applyDecorators(
        ApiAdminOnly(),
        ApiOperation({
            summary: 'Create a new admin account',
            description:
                'Creates a new admin user. Restricted to callers holding the ADMIN role. ' +
                'The supplied `password_hash` is hashed again before persistence.',
        }),
        ApiCreatedResponse({
            description: 'Admin created.',
            schema: {
                type: 'object',
                properties: {
                    id: { type: 'string', example: '2' },
                    email: { type: 'string', example: 'new_admin' },
                    role: { type: 'string', enum: ['ADMIN', 'PREMISE_ADMIN'] },
                    premises: {type: "list", example: ["1", "2"]}
                },
            },
        }),
        ApiValidationFailure(),
        ApiServerError(),
    );

export const ApiAddPremise = () =>
    applyDecorators(
        ApiAuthCookie(),
        ApiOperation({
            summary: 'Create a premise owned by the caller',
            description:
                'Registers a new premise (school site, campus, etc.) and links it to the calling admin.',
        }),
        ApiQuery({
            name: 'name',
            required: true,
            description: 'Display name of the premise (1-200 chars).',
            example: 'Petrik Lajos Main Campus',
        }),
        ApiCreatedResponse({
            description: 'Premise created.',
            schema: {
                type: 'object',
                properties: {
                    id: { type: 'string', example: '3' },
                    name: { type: 'string', example: 'Petrik Lajos Main Campus' },
                    admin_id: { type: 'string', example: '1' },
                },
            },
        }),
        ApiValidationFailure(),
        ApiServerError(),
    );
