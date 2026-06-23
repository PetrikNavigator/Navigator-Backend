import { Prisma } from "generated/prisma/client";
import { slugify } from "./slug";

type Lang = "hu" | "en"

/**
 * Accumulates translation rows while the entity seeds are transformed.
 *
 * Entity tables now store *codenames* instead of human text. For every entity
 * name/description we register the Hungarian (and optional English) text here
 * and get back a stable codename to store on the entity row. The frontend later
 * resolves those codenames through i18next.
 */
export class TranslationCollector {
    private readonly entries = new Map<string, Record<Lang, string>>()
    private readonly source = new Map<string, string>()

    /**
     * Registers a translation derived from an entity's Hungarian text and
     * returns the codename to store on the entity. Codenames are
     * `${prefix}.${slug}`; if two different texts slugify to the same codename a
     * numeric suffix keeps them unique. Re-registering the same text under the
     * same prefix is idempotent and reuses the existing codename.
     */
    add(prefix: string, hu: string, en?: string): string {
        const base = `${prefix}.${slugify(hu)}`

        let codename = base
        let counter = 2
        while (this.source.has(codename) && this.source.get(codename) !== hu) {
            codename = `${base}_${counter++}`
        }

        if (!this.source.has(codename)) {
            this.source.set(codename, hu)
            this.entries.set(codename, { hu, en: en ?? hu })
        }

        return codename
    }

    /** Registers a translation under a fixed, hand-written codename (UI strings). */
    set(codename: string, hu: string, en: string): void {
        this.source.set(codename, hu)
        this.entries.set(codename, { hu, en })
    }

    /** Flattens the collected entries into rows ready for `createMany`. */
    toRows(): Prisma.translationsCreateManyInput[] {
        const rows: Prisma.translationsCreateManyInput[] = []

        for (const [text_key, langs] of this.entries) {
            rows.push({ lang_key: "hu", text_key, text: langs.hu })
            rows.push({ lang_key: "en", text_key, text: langs.en })
        }

        return rows
    }
}
