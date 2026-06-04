import { Prisma } from "generated/prisma/client";

export function SeedLifts(count: number, buildings_count: number): Prisma.liftsCreateManyInput[] {
    const lifts: Prisma.liftsCreateManyInput[] = [
        {
            name: "LiftA",
            x: 36,
            y: -3,
            min_storey: 0,
            max_storey: 2,
            building_id: 1,
        },

        {
            name: "LiftB",
            x: 24,
            y: 38,
            min_storey: 0,
            max_storey: 3,
            building_id: 2,
        },

        {
            name: "LiftA",
            x: 1,
            y: 0,
            min_storey: 0,
            max_storey: 2,
            building_id: 3,
        }
    ]

    return lifts
}