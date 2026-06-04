import { ConflictException } from "@nestjs/common";
import { PrismaService } from "src/other/prisma/prisma.service";

interface UniqueNameOptions {
    excludeId?: bigint;
    message?: string;
}

/** Models with a `@@unique([name, building_id])` constraint. */
type BuildingScopedModel = "classrooms" | "corridors" | "lifts" | "stairs"

/**
 * Shared duplicate lookup. Every exported wrapper builds the `where` filter
 * that matches its model's `@@unique` constraint and delegates here.
 */
async function ensureUnique(
    prisma: PrismaService,
    model: BuildingScopedModel,
    where: Record<string, unknown>,
    options: UniqueNameOptions,
): Promise<void> {
    const delegate = prisma[model] as unknown as {
        findFirst: (args: {
            where: Record<string, unknown>
            select: { id: true }
        }) => Promise<{ id: bigint } | null>
    }

    const existing = await delegate.findFirst({ where, select: { id: true } })

    if (existing && existing.id !== options.excludeId)
        throw new ConflictException(
            options.message ?? `A ${model} with this name already exists!`,
        )
}

/**
 * Throws ConflictException when `name` is already taken inside the building.
 * For models constrained by `@@unique([name, building_id])`:
 * classrooms, corridors, lifts, stairs.
 */
export function ensureUniqueNameInBuilding(
    prisma: PrismaService,
    model: BuildingScopedModel,
    name: string,
    building_id: bigint,
    options: UniqueNameOptions = {},
): Promise<void> {
    return ensureUnique(prisma, model, { name, building_id }, options)
}