import { Prisma } from "generated/prisma/client";

export function SeedStairs(count: number, buildings_count: number): Prisma.stairsCreateManyInput[] {
    const stairs: Prisma.stairsCreateManyInput[] = [
        {
            name: "Lépcső A-Nyugat",
            x: 6,
            y: 0,
            min_storey: 0,
            max_storey: 2,
            building_id: 1,
            rotation: 0,
        },
        {
            name: "Lépcső A-Közép",
            x: 34,
            y: 0,
            min_storey: 0,
            max_storey: 2,
            building_id: 1,
            rotation: 0,
        },
        {
            name: "Lépcső B-Közép",
            x: 24,
            y: 4,
            min_storey: 0,
            max_storey: 3,
            building_id: 2,
            rotation: 0,
        },

        {
            name: "Lépcső A1",
            x: 24,
            y: 0,
            min_storey: 0,
            max_storey: 2,
            building_id: 3,
            rotation: 0,
        },
        {
            name: "Lépcső B1",
            x: 14,
            y: 0,
            min_storey: 0,
            max_storey: 1,
            building_id: 4,
            rotation: 0,
        }
    ]

    return stairs
}