import { applyDecorators } from "@nestjs/common";
import { IsInt, Min, Max } from "class-validator";

export function IsDbTinyInt() {
    return applyDecorators(
        IsInt(),
        Min(-128),
        Max(127)
    )
}