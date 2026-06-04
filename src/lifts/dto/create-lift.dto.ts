import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"
import { IsDbSmallInt } from "src/other/decorators/db-checks/IsDbSmallInt.decorator"
import { IsDbVarChar } from "src/other/decorators/db-checks/IsDbVarChar.decorator"
import { ToBigInt } from "src/other/decorators/transformer/to-bigint.transformer"
import { IsBigInt } from "src/other/decorators/validators/bigint-validator/IsBigInt.decorator"

export class CreateLiftDto {
    @ApiProperty({ description: 'Lift name.', minLength: 1, maxLength: 191, example: 'Main Lift' })
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

    @ApiProperty({ description: 'Lowest reachable storey.', minimum: -32768, maximum: 32767, example: 0 })
    @IsNotEmpty()
    @IsDbSmallInt()
    min_storey: number

    @ApiProperty({ description: 'Highest reachable storey.', minimum: -32768, maximum: 32767, example: 4 })
    @IsNotEmpty()
    @IsDbSmallInt()
    max_storey: number

    @ApiProperty({ description: 'BigInt id of the building.', type: String, example: '1' })
    @IsNotEmpty()
    @ToBigInt()
    @IsBigInt()
    building_id: bigint
}