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

export const ApiCorridorsController = () => ApiTags('Corridors');

const corridorSchema = {
    type: 'object' as const,
    properties: {
        id: { type: 'string', example: '1' },
        name: { type: 'string', example: 'Corridor A1' },
        storey: { type: 'integer' },
        x1: { type: 'integer' },
        y1: { type: 'integer' },
        x2: { type: 'integer' },
        y2: { type: 'integer' },
        width: { type: 'number' },
        barrier_free: { type: 'integer', example: 1 },
        building_id: { type: 'string', example: '1' },
        premise_id: { type: 'string', example: '1' },
    },
};

export const ApiGetCorridors = () =>
    applyDecorators(
        ApiAuthCookie(),
        ApiOperation({
            summary: 'List corridors of a premise',
            description: 'Returns all corridor segments belonging to the given premise.',
        }),
        ApiQuery({
            name: 'premise',
            required: true,
            type: String,
            example: '1',
            description: 'BigInt premise id.',
        }),
        ApiOkResponse({
            description: 'Array of corridors.',
            schema: { type: 'array', items: corridorSchema },
        }),
        ApiValidationFailure(),
        ApiResourceNotFound('Premise'),
        ApiServerError(),
    );

export const ApiAddCorridor = () =>
    applyDecorators(
        ApiAuthCookie(),
        ApiOperation({
            summary: 'Create a corridor',
            description: 'Creates a single corridor segment defined by two end points.',
        }),
        ApiCreatedResponse({ description: 'Corridor created.', schema: corridorSchema }),
        ApiValidationFailure(),
        ApiResourceNotFound('Building'),
        ApiServerError(),
    );

export const ApiModifyCorridor = () =>
    applyDecorators(
        ApiAuthCookie(),
        ApiOperation({ summary: 'Update a corridor' }),
        ApiParam({ name: 'id', type: String, example: '1', description: 'BigInt corridor id.' }),
        ApiOkResponse({ description: 'Updated corridor.', schema: corridorSchema }),
        ApiValidationFailure(),
        ApiResourceNotFound('Corridor'),
        ApiServerError(),
    );

export const ApiRemoveCorridor = () =>
    applyDecorators(
        ApiAuthCookie(),
        ApiOperation({ summary: 'Delete a corridor' }),
        ApiParam({ name: 'id', type: String, example: '1', description: 'BigInt corridor id.' }),
        ApiOkResponse({ description: 'Corridor deleted.' }),
        ApiResourceNotFound('Corridor'),
        ApiServerError(),
    );