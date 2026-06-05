import { Prisma } from "generated/prisma/client";

export function SeedLifts(count: number, buildings_count: number): Prisma.liftsCreateManyInput[] {
    const lifts: Prisma.liftsCreateManyInput[] = [
        {
            name: "LiftA",
            x: 3,
            y: -27,
            min_storey: -1,
            max_storey: 2,
            building_id: 1,
        }
    ]

    return lifts
}