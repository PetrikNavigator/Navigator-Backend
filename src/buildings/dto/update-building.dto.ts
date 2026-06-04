import { PartialType, PickType } from '@nestjs/swagger';
import { CreateBuildingDto } from './create-building.dto';

export class UpdateBuildingDto extends PartialType(
    PickType(
        CreateBuildingDto,
        [
            "name",
            "description",
            "x",
            "y"
        ] as const
    )
) { }