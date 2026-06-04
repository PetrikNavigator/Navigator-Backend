import { applyDecorators } from "@nestjs/common";
import { IsInt, Min, Max } from "class-validator";

export function IsDbUnsignedInt() {
    return applyDecorators(
        IsInt(),
        Min(0),
        Max(4294967295),
    )
}