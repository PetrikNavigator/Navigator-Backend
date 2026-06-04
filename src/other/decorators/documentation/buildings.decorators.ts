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

export const ApiBuildingsController = () => ApiTags('Buildings');

const buildingSchema = {
    type: 'object' as const,
    properties: {
        id: { type: 'string', example: '1' },
        name: { type: 'string', example: 'Main Building' },
        description: { type: 'string' },
        x: { type: 'integer', example: 100 },
        y: { type: 'integer', example: 250 },
        premise_id: { type: 'string', example: '1' },
    },
};

export const ApiGetBuildings = () =>
    applyDecorators(
        ApiAuthCookie(),
        ApiOperation({
            summary: 'List buildings of a premise',
            description: 'Returns all buildings belonging to the given premise that the caller owns.',
        }),
        ApiQuery({
            name: 'premise',
            required: true,
            type: String,
            example: '1',
            description: 'BigInt premise id (passed as a numeric string).',
        }),
        ApiOkResponse({
            description: 'Array of buildings.',
            schema: { type: 'array', items: buildingSchema },
        }),
        ApiValidationFailure(),
        ApiResourceNotFound('Premise'),
        ApiServerError(),
    );

export const ApiAddBuilding = () =>
    applyDecorators(
        ApiAuthCookie(),
        ApiOperation({
            summary: 'Create a new building',
            description: 'Adds a building inside a premise that the caller owns.',
        }),
        ApiCreatedResponse({ description: 'Building created.', schema: buildingSchema }),
        ApiValidationFailure(),
        ApiResourceNotFound('Premise'),
        ApiServerError(),
    );

export const ApiModifyBuilding = () =>
    applyDecorators(
        ApiAuthCookie(),
        ApiOperation({
            summary: 'Update an existing building',
            description: 'Partially updates a building. Only the provided fields are changed.',
        }),
        ApiParam({ name: 'id', type: String, example: '1', description: 'BigInt building id.' }),
        ApiOkResponse({ description: 'Updated building.', schema: buildingSchema }),
        ApiValidationFailure(),
        ApiResourceNotFound('Building'),
        ApiServerError(),
    );

export const ApiRemoveBuilding = () =>
    applyDecorators(
        ApiAuthCookie(),
        ApiOperation({
            summary: 'Delete a building',
            description: 'Cascade-deletes the building and its dependent classrooms, corridors, lifts and stairs.',
        }),
        ApiParam({ name: 'id', type: String, example: '1', description: 'BigInt building id.' }),
        ApiOkResponse({ description: 'Building deleted.' }),
        ApiResourceNotFound('Building'),
        ApiServerError(),
    );
