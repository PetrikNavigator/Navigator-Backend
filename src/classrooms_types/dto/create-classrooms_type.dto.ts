import { ApiPropertyOptional, ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsHexColor } from "class-validator"
import { IsDbVarChar } from "src/other/decorators/db-checks/IsDbVarChar.decorator"

export class CreateClassroomsTypeDto {
    @ApiPropertyOptional({ description: 'Free-form classroom type label (e.g. "lab").', example: 'lab' })
    @IsNotEmpty()
    @IsDbVarChar(1, 100)
    name: string

    @ApiProperty({
        description: 'Color in #RRGGBBAA hex form (exactly 9 characters).',
        minLength: 9,
        maxLength: 9,
        example: '#FF8800FF',
    })
    @IsNotEmpty()
    @IsHexColor()
    colorhex: string
}