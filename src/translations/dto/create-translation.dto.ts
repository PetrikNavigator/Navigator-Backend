import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"
import { IsDbText } from "src/other/decorators/db-checks/IsDbText.decorator"
import { IsDbVarChar } from "src/other/decorators/db-checks/IsDbVarChar.decorator"

export class CreateTranslationDto {
    @ApiProperty({
        description: 'Language key this translation belongs to (e.g. "hu", "en").',
        minLength: 1,
        maxLength: 10,
        example: 'hu',
    })
    @IsNotEmpty()
    @IsDbVarChar(1, 10)
    lang_key: string

    @ApiProperty({
        description: 'Translation codename the frontend refers to (e.g. "ui.login.submit").',
        minLength: 1,
        maxLength: 191,
        example: 'ui.login.submit',
    })
    @IsNotEmpty()
    @IsDbVarChar(1, 191)
    text_key: string

    @ApiProperty({
        description: 'Translated text for this language/codename pair.',
        minLength: 1,
        maxLength: 16000,
        example: 'Bejelentkezés',
    })
    @IsNotEmpty()
    @IsDbText(1, 16000)
    text: string
}
