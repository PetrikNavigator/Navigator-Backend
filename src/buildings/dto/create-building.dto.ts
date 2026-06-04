import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"
import { IsDbSmallInt } from "src/other/decorators/db-checks/IsDbSmallInt.decorator"
import { IsDbText } from "src/other/decorators/db-checks/IsDbText.decorator"
import { IsDbVarChar } from "src/other/decorators/db-checks/IsDbVarChar.decorator"

export class CreateBuildingDto {
    @ApiProperty({
        description: 'Display name of the building.',
        minLength: 1,
        maxLength: 191,
        example: 'Main Building',
    })
    @IsNotEmpty()
    @IsDbVarChar(1, 190)
    name: string

    @ApiProperty({
        description: 'Free-form description of the building.',
        minLength: 1,
        maxLength: 16000,
        example: 'Five-storey main teaching building.',
    })
    @IsNotEmpty()
    @IsDbText(1, 16000)
    description: string

    @ApiProperty({
        description: 'X coordinate on the premise map.',
        type: 'integer',
        example: 100,
    })
    @IsNotEmpty()
    @IsDbSmallInt()
    x: number

    @ApiProperty({
        description: 'Y coordinate on the premise map.',
        type: 'integer',
        example: 250,
    })
    @IsNotEmpty()
    @IsDbSmallInt()
    y: number
}