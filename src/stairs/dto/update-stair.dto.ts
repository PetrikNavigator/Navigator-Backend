import { PartialType, PickType } from '@nestjs/swagger';
import { CreateStairDto } from './create-stair.dto';

export class UpdateStairDto extends PartialType(
    PickType(
        CreateStairDto,
        [
            "name",
            "x",
            "y",
            "max_storey",
            "min_storey",
            "rotation",
            "building_id",
        ] as const
    )
) { }