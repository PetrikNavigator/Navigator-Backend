import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { RemoveXss } from "src/other/decorators/transformer/to-remove-xss.transformer";

export class LoginDto {
    @ApiProperty({
        description: 'Admin email.',
        example: 'admin@admin.admin',
    })
    @IsNotEmpty()
    @IsEmail()
    @RemoveXss()
    email: string

    @ApiProperty({
        description: 'Admin password (plain text over TLS).',
        example: 'admin',
    })
    @IsNotEmpty()
    @IsString()
    @RemoveXss()
    password: string
}
