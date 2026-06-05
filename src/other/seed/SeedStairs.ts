import { Prisma } from "generated/prisma/client";

export function SeedStairs(count: number, buildings_count: number): Prisma.stairsCreateManyInput[] {
    const stairs: Prisma.stairsCreateManyInput[] = [
        {
            name: "Lépcső a mínusz egyre",
            x: 28,
            y: -11,
            min_storey: -1,
            max_storey: 0,
            building_id: 0,
            rotation: 1,
        },
        {
            name: "A épület tűzlépcső",
            x: 2,
            y: -32,
            min_storey: 0,
            max_storey: 2,
            building_id: 270,
            rotation: 1,
        },
        {
            name: "Lépcső az elsőre",
            x: 24,
            y: -20,
            min_storey: 0,
            max_storey: 1,
            building_id: 0,
            rotation: 1,
        },
        {
            name: "Lépcső a másodikra",
            x: 24,
            y: -12,
            min_storey: 1,
            max_storey: 2,
            building_id: 0,
            rotation: 1,
        },
    ]

    return stairs
}