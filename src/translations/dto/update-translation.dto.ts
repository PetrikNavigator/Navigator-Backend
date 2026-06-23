import { PartialType, PickType } from '@nestjs/swagger';
import { CreateTranslationDto } from './create-translation.dto';

export class UpdateTranslationDto extends PartialType(
    PickType(
        CreateTranslationDto,
        [
            "text"
        ] as const
    )
) { }
