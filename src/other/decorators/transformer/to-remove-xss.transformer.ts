import { Transform, TransformFnParams } from "class-transformer";
import sanitizeHtml from 'sanitize-html';

/**
 * Removes all unwanted HTML tags if the value is a string.
 */
export function RemoveXss() {
  return Transform(({ value }: TransformFnParams) => {
    if (typeof value !== "string") {
      return value
    }

    return sanitizeHtml(value, {
      allowedAttributes: {},
      allowedTags: [],
    })
  })
}