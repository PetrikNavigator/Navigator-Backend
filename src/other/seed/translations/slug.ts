/**
 * Turns an arbitrary human-readable string into an ASCII codename fragment.
 * Strips accents, lowercases, and collapses every non-alphanumeric run into a
 * single underscore. Used to derive stable translation codenames from the
 * original Hungarian entity names.
 */
export function slugify(value: string): string {
    const slug = value
        .normalize("NFD")
        .replace(/\p{Diacritic}/gu, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "_")
        .replace(/^_+|_+$/g, "")

    return slug.length > 0 ? slug : "x"
}
