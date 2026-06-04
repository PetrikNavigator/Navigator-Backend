import { applyDecorators } from "@nestjs/common";
import { IsInt, Min, Max } from "class-validator";

export function IsDbSmallInt() {
    return applyDecorators(
        IsInt(),
        Min(-32768),
        Max(32767),
    )
}