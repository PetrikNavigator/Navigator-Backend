import { Prisma } from "generated/prisma/client";

export function SeedBuildings(count: number): Prisma.buildingsCreateManyInput[] {
    const buildings: Prisma.buildingsCreateManyInput[] = [
        {
            id: 1,
            name: "A épület",
            description: "Informatikusok épülete",
            x: -180,
            y: -1,
        },
        {
            id: 2,
            name: "B épület",
            description: "Vegyészek és környezetvédők épülete",
            x: -39,
            y: -4,
        }
    ]

    return buildings
}