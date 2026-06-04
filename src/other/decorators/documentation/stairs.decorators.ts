import { applyDecorators } from '@nestjs/common';
import {
    ApiCreatedResponse,
    ApiOkResponse,
    ApiOperation,
    ApiParam,
    ApiQuery,
    ApiTags,
} from '@nestjs/swagger';
import {
    ApiAuthCookie,
    ApiResourceNotFound,
    ApiServerError,
    ApiValidationFailure,
} from './common.decorators';

export const ApiStairsController = () => ApiTags('Stairs');

const stairSchema = {
    type: 'object' as const,
    properties: {
        id: { type: 'string', example: '1' },
        name: { type: 'string', example: 'East Staircase' },
        x: { type: 'integer' },
        y: { type: 'integer' },
        min_storey: { type: 'integer', example: 0 },
        max_storey: { type: 'integer', example: 4 },
        building_id: { type: 'string', example: '1' },
        premise_id: { type: 'string', example: '1' },
    },
};

export const ApiGetStairs = () =>
    applyDecorators(
        ApiAuthCookie(),
        ApiOperation({ summary: 'List stairs of a premise' }),
        ApiQuery({
            name: 'premise',
            required: true,
            type: String,
            example: '1',
            description: 'BigInt premise id.',
        }),
        ApiOkResponse({
            description: 'Array of stairs.',
            schema: { type: 'array', items: stairSchema },
        }),
        ApiValidationFailure(),
        ApiResourceNotFound('Premise'),
        ApiServerError(),
    );

export const ApiAddStair = () =>
    applyDecorators(
        ApiAuthCookie(),
        ApiOperation({ summary: 'Create a stair segment' }),
        ApiCreatedResponse({ description: 'Stair created.', schema: stairSchema }),
        ApiValidationFailure(),
        ApiResourceNotFound('Building'),
        ApiServerError(),
    );

export const ApiModifyStair = () =>
    applyDecorators(
        ApiAuthCookie(),
        ApiOperation({ summary: 'Update a stair segment' }),
        ApiParam({ name: 'id', type: String, example: '1', description: 'BigInt stair id.' }),
        ApiOkResponse({ description: 'Updated stair.', schema: stairSchema }),
        ApiValidationFailure(),
        ApiResourceNotFound('Stair'),
        ApiServerError(),
    );

export const ApiRemoveStair = () =>
    applyDecorators(
        ApiAuthCookie(),
        ApiOperation({ summary: 'Delete a stair segment' }),
        ApiParam({ name: 'id', type: String, example: '1', description: 'BigInt stair id.' }),
        ApiOkResponse({ description: 'Stair deleted.' }),
        ApiResourceNotFound('Stair'),
        ApiServerError(),
    );
