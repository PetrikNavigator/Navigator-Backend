import { ApiProperty } from "@nestjs/swagger"
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, Max, Min } from "class-validator"
import { IsDbSmallInt } from "src/other/decorators/db-checks/IsDbSmallInt.decorator"
import { IsDbVarChar } from "src/other/decorators/db-checks/IsDbVarChar.decorator"
import { ToBigInt } from "src/other/decorators/transformer/to-bigint.transformer"
import { IsBigInt } from "src/other/decorators/validators/bigint-validator/IsBigInt.decorator"

export class CreateCorridorDto {
    @ApiProperty({ description: 'Corridor name.', minLength: 1, maxLength: 255, example: 'Corridor A1' })
    @IsNotEmpty()
    @IsDbVarChar(1, 255)
    name: string

    @ApiProperty({ description: 'Storey index (signed 16-bit).', minimum: -32768, maximum: 32767, example: 1 })
    @IsNotEmpty()
    @IsDbSmallInt()
    storey: number

    @ApiProperty({ description: 'Start X.', minimum: -32768, maximum: 32767 })
    @IsNotEmpty()
    @IsDbSmallInt()
    x1: number

    @ApiProperty({ description: 'Start Y.', minimum: -32768, maximum: 32767 })
    @IsNotEmpty()
    @IsDbSmallInt()
    y1: number

    @ApiProperty({ description: 'End X.', minimum: -32768, maximum: 32767 })
    @IsNotEmpty()
    @IsDbSmallInt()
    x2: number

    @ApiProperty({ description: 'End Y.', minimum: -32768, maximum: 32767 })
    @IsNotEmpty()
    @IsDbSmallInt()
    y2: number

    @ApiProperty({ description: 'Corridor width.', example: 2 })
    @IsNotEmpty()
    @IsNumber()
    @Min(0.5)
    @Max(20)
    width: number

    @ApiProperty({ description: 'Barrier-free flag (1 = yes, 0 = no).', example: 1 })
    @IsOptional()
    @IsBoolean()
    barrier_free?: boolean

    @ApiProperty({ description: 'Is this an outdoor corridor flag (1 = yes, 0 = no).', example: 1 })
    @IsOptional()
    @IsBoolean()
    is_outdoor?: boolean

    @ApiProperty({ description: 'BigInt id of the building.', type: String, example: '1' })
    @IsNotEmpty()
    @ToBigInt()
    @IsBigInt()
    building_id: bigint
}