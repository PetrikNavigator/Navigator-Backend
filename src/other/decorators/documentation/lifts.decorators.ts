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

export const ApiLiftsController = () => ApiTags('Lifts');

const liftSchema = {
    type: 'object' as const,
    properties: {
        id: { type: 'string', example: '1' },
        name: { type: 'string', example: 'Main Lift' },
        x: { type: 'integer' },
        y: { type: 'integer' },
        min_storey: { type: 'integer', example: 0 },
        max_storey: { type: 'integer', example: 4 },
        building_id: { type: 'string', example: '1' },
        premise_id: { type: 'string', example: '1' },
    },
};

export const ApiGetLifts = () =>
    applyDecorators(
        ApiAuthCookie(),
        ApiOperation({ summary: 'List lifts of a premise' }),
        ApiQuery({
            name: 'premise',
            required: true,
            type: String,
            example: '1',
            description: 'BigInt premise id.',
        }),
        ApiOkResponse({
            description: 'Array of lifts.',
            schema: { type: 'array', items: liftSchema },
        }),
        ApiValidationFailure(),
        ApiResourceNotFound('Premise'),
        ApiServerError(),
    );

export const ApiAddLift = () =>
    applyDecorators(
        ApiAuthCookie(),
        ApiOperation({ summary: 'Create a lift' }),
        ApiCreatedResponse({ description: 'Lift created.', schema: liftSchema }),
        ApiValidationFailure(),
        ApiResourceNotFound('Building'),
        ApiServerError(),
    );

export const ApiModifyLift = () =>
    applyDecorators(
        ApiAuthCookie(),
        ApiOperation({ summary: 'Update a lift' }),
        ApiParam({ name: 'id', type: String, example: '1', description: 'BigInt lift id.' }),
        ApiOkResponse({ description: 'Updated lift.', schema: liftSchema }),
        ApiValidationFailure(),
        ApiResourceNotFound('Lift'),
        ApiServerError(),
    );

export const ApiRemoveLift = () =>
    applyDecorators(
        ApiAuthCookie(),
        ApiOperation({ summary: 'Delete a lift' }),
        ApiParam({ name: 'id', type: String, example: '1', description: 'BigInt lift id.' }),
        ApiOkResponse({ description: 'Lift deleted.' }),
        ApiResourceNotFound('Lift'),
        ApiServerError(),
    );
