import { applyDecorators } from "@nestjs/common";
import { IsInt, Min, Max } from "class-validator";

export function IsDbUnsignedTinyInt(min: number = 0, max: number = 255) {
    return applyDecorators(
        IsInt(),
        Min(min),
        Max(max)
    )
}