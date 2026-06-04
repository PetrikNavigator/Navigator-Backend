import { PartialType, PickType } from '@nestjs/swagger';
import { CreateCorridorDto } from './create-corridor.dto';

export class UpdateCorridorDto extends PartialType(
    PickType(
        CreateCorridorDto,
        [
            "name",
            "storey",
            "x1",
            "y1",
            "x2",
            "y2",
            "width",
            "barrier_free",
            "is_outdoor",
            "building_id",
        ] as const
    )
) { }