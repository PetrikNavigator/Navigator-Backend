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

export const ApiClassroomsController = () => ApiTags('Classrooms');

const classroomSchema = {
    type: 'object' as const,
    properties: {
        id: { type: 'string', example: '1' },
        name: { type: 'string', example: 'A1.04' },
        capacity: { type: 'integer', example: 30 },
        storey: { type: 'integer', example: 1 },
        x: { type: 'integer' },
        y: { type: 'integer' },
        rotation: { type: 'integer', enum: [90, 180, 270] },
        size_x: { type: 'number' },
        size_y: { type: 'number' },
        size_z: { type: 'number' },
        description: { type: 'string' },
        building_id: { type: 'string', example: '1' },
        premise_id: { type: 'string', example: '1' },
        type_id: { type: 'string', nullable: true, example: '2' },
        classroom_type: { type: 'string', nullable: true, example: 'lab' },
        colorHex: { type: 'string', example: '#FF8800FF' },
    },
};

export const ApiGetClassrooms = () =>
    applyDecorators(
        ApiAuthCookie(),
        ApiOperation({
            summary: 'List classrooms of a premise',
            description: 'Returns all classrooms inside the premise that the caller owns.',
        }),
        ApiQuery({
            name: 'premise',
            required: true,
            type: String,
            example: '1',
            description: 'BigInt premise id.',
        }),
        ApiOkResponse({
            description: 'Array of classrooms.',
            schema: { type: 'array', items: classroomSchema },
        }),
        ApiValidationFailure(),
        ApiResourceNotFound('Premise'),
        ApiServerError(),
    );

export const ApiAddClassroom = () =>
    applyDecorators(
        ApiAuthCookie(),
        ApiOperation({
            summary: 'Create a classroom',
            description: 'Creates a classroom under a building.',
        }),
        ApiCreatedResponse({ description: 'Classroom created.', schema: classroomSchema }),
        ApiValidationFailure(),
        ApiResourceNotFound('Building'),
        ApiServerError(),
    );

export const ApiModifyClassroom = () =>
    applyDecorators(
        ApiAuthCookie(),
        ApiOperation({
            summary: 'Update a classroom',
            description: 'Partially updates a classroom. Only the provided fields are changed.',
        }),
        ApiParam({ name: 'id', type: String, example: '1', description: 'BigInt classroom id.' }),
        ApiOkResponse({ description: 'Updated classroom.', schema: classroomSchema }),
        ApiValidationFailure(),
        ApiResourceNotFound('Classroom'),
        ApiServerError(),
    );

export const ApiRemoveClassroom = () =>
    applyDecorators(
        ApiAuthCookie(),
        ApiOperation({ summary: 'Delete a classroom' }),
        ApiParam({ name: 'id', type: String, example: '1', description: 'BigInt classroom id.' }),
        ApiOkResponse({ description: 'Classroom deleted.' }),
        ApiResourceNotFound('Classroom'),
        ApiServerError(),
    );
