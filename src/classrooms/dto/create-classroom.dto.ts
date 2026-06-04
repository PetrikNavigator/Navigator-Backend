import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, } from "class-validator"
import { IsDbSmallInt } from "src/other/decorators/db-checks/IsDbSmallInt.decorator"
import { IsDbTinyInt } from "src/other/decorators/db-checks/IsDbTinyInt.decorator"
import { IsDbUnsignedInt } from "src/other/decorators/db-checks/IsDbUnsignedInt.decorator"
import { IsDbUnsignedSmallInt } from "src/other/decorators/db-checks/IsDbUnsignedSmallInt.decorator"
import { IsDbVarChar } from "src/other/decorators/db-checks/IsDbVarChar.decorator"
import { ToBigInt } from "src/other/decorators/transformer/to-bigint.transformer"
import { IsBigInt } from "src/other/decorators/validators/bigint-validator/IsBigInt.decorator"

export class CreateClassroomDto {
    @ApiProperty({ description: 'Classroom name.', minLength: 1, maxLength: 191, example: 'A1.04' })
    @IsNotEmpty()
    @IsDbVarChar(1, 255)
    name: string

    @ApiProperty({ description: 'Maximum number of seats.', minimum: 1, example: 30 })
    @IsNotEmpty()
    @IsDbUnsignedInt()
    capacity: number

    @ApiProperty({ description: 'Storey index (signed 8-bit).', minimum: -128, maximum: 127, example: 1 })
    @IsNotEmpty()
    @IsDbTinyInt()
    storey: number

    @ApiProperty({ description: 'Door X coordinate (signed 8-bit).', minimum: -128, maximum: 127 })
    @IsNotEmpty()
    @IsDbSmallInt()
    x: number

    @ApiProperty({ description: 'Door Y coordinate (signed 8-bit).', minimum: -128, maximum: 127 })
    @IsNotEmpty()
    @IsDbSmallInt()
    y: number

    @ApiProperty({
        description: 'Door rotation in degrees.',
        minimum: 0,
        maximum: 360,
        example: 90,
    })
    @IsNotEmpty()
    @IsDbUnsignedSmallInt()
    rotation: number

    @ApiProperty({ description: 'Classroom width.', example: 6 })
    @IsNotEmpty()
    @IsDbUnsignedInt()
    size_x: number

    @ApiProperty({ description: 'Classroom depth.', example: 5 })
    @IsNotEmpty()
    @IsDbUnsignedInt()
    size_y: number

    @ApiProperty({ description: 'Classroom height.', example: 3 })
    @IsNotEmpty()
    @IsDbUnsignedInt()
    size_z: number

    @ApiProperty({ description: 'Free-form description.', minLength: 1, maxLength: 191 })
    @IsNotEmpty()
    @IsDbVarChar(1, 191)
    description: string

    @ApiProperty({ description: 'BigInt id of the building this classroom is in.', type: String, example: '1' })
    @IsNotEmpty()
    @ToBigInt()
    @IsBigInt()
    building_id: bigint

    @IsNotEmpty()
    @ToBigInt()
    @IsBigInt()
    type_id: bigint
}