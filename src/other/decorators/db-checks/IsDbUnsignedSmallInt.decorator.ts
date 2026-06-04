import { applyDecorators } from "@nestjs/common";
import { IsInt, Min, Max } from "class-validator";

export function IsDbUnsignedSmallInt(min: number = 0, max: number = 360) {
    return applyDecorators(
        IsInt(),
        Min(min),
        Max(max),
    )
}