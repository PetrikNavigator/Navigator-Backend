import { PartialType, PickType } from '@nestjs/swagger';
import { CreateClassroomDto } from './create-classroom.dto';

export class UpdateClassroomDto extends PartialType(
    PickType(
        CreateClassroomDto,
        [
            "name",
            "capacity",
            "storey",
            "x",
            "y",
            "rotation",
            "size_x",
            "size_y",
            "size_z",
            "description",
            "building_id",
            "type_id"
        ] as const
    )
) { }