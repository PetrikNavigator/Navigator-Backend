import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"
import { IsDbSmallInt } from "src/other/decorators/db-checks/IsDbSmallInt.decorator"
import { IsDbUnsignedSmallInt } from "src/other/decorators/db-checks/IsDbUnsignedSmallInt.decorator"
import { IsDbVarChar } from "src/other/decorators/db-checks/IsDbVarChar.decorator"
import { ToBigInt } from "src/other/decorators/transformer/to-bigint.transformer"
import { IsBigInt } from "src/other/decorators/validators/bigint-validator/IsBigInt.decorator"

export class CreateStairDto {
    @ApiProperty({ description: 'Stair name.', example: 'East Staircase' })
    @IsNotEmpty()
    @IsDbVarChar(1, 191)
    name: string

    @ApiProperty({ description: 'X position.', minimum: -32768, maximum: 32767 })
    @IsNotEmpty()
    @IsDbSmallInt()
    x: number

    @ApiProperty({ description: 'Y position.', minimum: -32768, maximum: 32767 })
    @IsNotEmpty()
    @IsDbSmallInt()
    y: number

    @ApiProperty({ description: 'Lowest connected storey.', minimum: -32768, maximum: 32767, example: 0 })
    @IsNotEmpty()
    @IsDbSmallInt()
    min_storey: number

    @ApiProperty({ description: 'Highest connected storey.', minimum: -32768, maximum: 32767, example: 4 })
    @IsNotEmpty()
    @IsDbSmallInt()
    max_storey: number

    @ApiProperty({
        description: 'Rotation in degrees.',
        minimum: 0,
        maximum: 360,
        example: 90,
    })
    @IsNotEmpty()
    @IsDbUnsignedSmallInt()
    rotation: number

    @ApiProperty({ description: 'BigInt id of the building.', type: String, example: '1' })
    @IsNotEmpty()
    @ToBigInt()
    @IsBigInt()
    building_id: bigint
}