import { PartialType } from '@nestjs/swagger';
import { CreateClassroomsTypeDto } from './create-classrooms_type.dto';
import { PickType } from '@nestjs/mapped-types';

export class UpdateClassroomsTypeDto extends PartialType(
    PickType(
        CreateClassroomsTypeDto,
        [
            "name",
            "colorhex"
        ]
    )
) { }