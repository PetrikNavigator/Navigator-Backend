import { PartialType, PickType } from '@nestjs/swagger';
import { CreateLiftDto } from './create-lift.dto';

export class UpdateLiftDto extends PartialType(
    PickType(
        CreateLiftDto,
        [
            "name",
            "x",
            "y",
            "min_storey",
            "max_storey",
            "building_id",
        ] as const
    )
) { }