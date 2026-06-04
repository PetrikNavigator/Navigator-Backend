import { applyDecorators } from "@nestjs/common";
import { Length } from "class-validator";
import { RemoveXss } from "../transformer/to-remove-xss.transformer";
import { IsUtf8 } from "../validators/utf8-validator/IsUtf8.decorator";

export function IsDbText(min_len: number, max_len: number) {
    return applyDecorators(
        IsUtf8(),
        Length(min_len, max_len),
        RemoveXss(),
    )
}