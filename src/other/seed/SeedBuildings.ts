import { Prisma } from "generated/prisma/client";

export function SeedBuildings(count: number): Prisma.buildingsCreateManyInput[] {
    const buildings: Prisma.buildingsCreateManyInput[] = [
        {
            id: 1,
            name: "A épület",
            description: "Informatikusok épülete",
            x: 0,
            y: 0,
        },
        {
            id: 2,
            name: "B épület",
            description: "Vegyészek és környezetvédők épülete",
            x: 60,
            y: 12,
        },
        {
            id: 3,
            name: "A épület",
            description: "Informatikusok épülete",
            x: 0,
            y: 0,
        },
        {
            id: 4,
            name: "B épület",
            description: "Vegyészek és környezetvédők épülete",
            x: 60,
            y: 12,
        }
    ]

    return buildings
}