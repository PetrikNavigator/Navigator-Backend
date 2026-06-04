import { Prisma } from "generated/prisma/client";

export function SeedCorridors(count: number): Prisma.corridorsCreateManyInput[] {
    // const corridors: Prisma.corridorsCreateManyInput[] = Array.from({length: count}, () => ({
    //     name: "",
    //     storey: 
    //     x1: ,
    //     y1: ,
    //     x2: ,
    //     y2: ,
    //     width: ,
    //     barrier_free: ,
    //     building_id: 
    // }))

    const corridors: Prisma.corridorsCreateManyInput[] = [
        // "A" épület — main corridor (east) + the north wing on every storey.
        { id: 1, name: "A0-Main", storey: 0, x1: 0, y1: 0, x2: 52, y2: 0, width: 2.5, barrier_free: true, is_outdoor: false, building_id: 1 },
        { id: 2, name: "A0-Wing", storey: 0, x1: 52, y1: 0, x2: 52, y2: 36, width: 2.5, barrier_free: true, is_outdoor: false, building_id: 1 },
        { id: 3, name: "A1-Main", storey: 1, x1: 0, y1: 0, x2: 52, y2: 0, width: 2.5, barrier_free: true, is_outdoor: false, building_id: 1 },
        { id: 4, name: "A1-Wing", storey: 1, x1: 52, y1: 0, x2: 52, y2: 36, width: 2.5, barrier_free: true, is_outdoor: false, building_id: 1 },
        { id: 5, name: "A2-Main", storey: 2, x1: 0, y1: 0, x2: 52, y2: 0, width: 2.5, barrier_free: true, is_outdoor: false, building_id: 1 },
        { id: 17, name: "A2-Wing", storey: 2, x1: 52, y1: 0, x2: 52, y2: 44, width: 2.5, barrier_free: true, is_outdoor: false, building_id: 1 },
        // "B" épület — a corridor ring around the central core on every storey.
        { id: 6, name: "B0-North", storey: 0, x1: 11, y1: 38, x2: 31, y2: 38, width: 2.5, barrier_free: true, is_outdoor: false, building_id: 2 },
        { id: 7, name: "B0-East", storey: 0, x1: 31, y1: 6, x2: 31, y2: 38, width: 2.5, barrier_free: true, is_outdoor: false, building_id: 2 },
        { id: 18, name: "B0-South", storey: 0, x1: 11, y1: 6, x2: 31, y2: 6, width: 2.5, barrier_free: true, is_outdoor: false, building_id: 2 },
        { id: 19, name: "B0-West", storey: 0, x1: 11, y1: 6, x2: 11, y2: 38, width: 2.5, barrier_free: true, is_outdoor: false, building_id: 2 },
        { id: 20, name: "B1-North", storey: 1, x1: 11, y1: 38, x2: 31, y2: 38, width: 2.5, barrier_free: true, is_outdoor: false, building_id: 2 },
        { id: 21, name: "B1-East", storey: 1, x1: 31, y1: 6, x2: 31, y2: 38, width: 2.5, barrier_free: true, is_outdoor: false, building_id: 2 },
        { id: 22, name: "B1-South", storey: 1, x1: 11, y1: 6, x2: 31, y2: 6, width: 2.5, barrier_free: true, is_outdoor: false, building_id: 2 },
        { id: 23, name: "B1-West", storey: 1, x1: 11, y1: 6, x2: 11, y2: 38, width: 2.5, barrier_free: true, is_outdoor: false, building_id: 2 },
        { id: 24, name: "B2-North", storey: 2, x1: 11, y1: 40, x2: 31, y2: 40, width: 2.5, barrier_free: true, is_outdoor: false, building_id: 2 },
        { id: 25, name: "B2-East", storey: 2, x1: 31, y1: 6, x2: 31, y2: 40, width: 2.5, barrier_free: true, is_outdoor: false, building_id: 2 },
        { id: 26, name: "B2-South", storey: 2, x1: 11, y1: 6, x2: 31, y2: 6, width: 2.5, barrier_free: true, is_outdoor: false, building_id: 2 },
        { id: 27, name: "B2-West", storey: 2, x1: 11, y1: 6, x2: 11, y2: 40, width: 2.5, barrier_free: true, is_outdoor: false, building_id: 2 },
        { id: 28, name: "B3-North", storey: 3, x1: 11, y1: 40, x2: 31, y2: 40, width: 2.5, barrier_free: true, is_outdoor: false, building_id: 2 },
        { id: 29, name: "B3-East", storey: 3, x1: 31, y1: 6, x2: 31, y2: 40, width: 2.5, barrier_free: true, is_outdoor: false, building_id: 2 },
        { id: 30, name: "B3-South", storey: 3, x1: 11, y1: 6, x2: 31, y2: 6, width: 2.5, barrier_free: true, is_outdoor: false, building_id: 2 },
        { id: 31, name: "B3-West", storey: 3, x1: 11, y1: 6, x2: 11, y2: 40, width: 2.5, barrier_free: true, is_outdoor: false, building_id: 2 },
        { id: 8, name: "Udvar", storey: 0, x1: 30, y1: 0, x2: 60, y2: 12, width: 2.5, barrier_free: true, is_outdoor: true, building_id: 1 },

        { id: 9, name: "A0-East", storey: 0, x1: 1, y1: 0, x2: 24, y2: 0, width: 2.5, barrier_free: true, building_id: 3 },
        { id: 10, name: "A0-South", storey: 0, x1: 24, y1: 0, x2: 24, y2: 18, width: 2.5, barrier_free: true, building_id: 3 },
        { id: 11, name: "A1-East", storey: 1, x1: 1, y1: 0, x2: 24, y2: 0, width: 2.5, barrier_free: true, building_id: 3 },
        { id: 12, name: "A1-South", storey: 1, x1: 24, y1: 0, x2: 24, y2: 12, width: 2.5, barrier_free: false, building_id: 3 },
        { id: 13, name: "A2-Hall", storey: 2, x1: 1, y1: 0, x2: 10, y2: 0, width: 2.5, barrier_free: true, building_id: 3 },
        { id: 14, name: "B0-Hall", storey: 0, x1: 1, y1: 0, x2: 14, y2: 0, width: 2.5, barrier_free: true, building_id: 4 },
        { id: 15, name: "B1-Hall", storey: 1, x1: 1, y1: 0, x2: 18, y2: 0, width: 2.5, barrier_free: true, building_id: 4 },
        { id: 16, name: "Udvar", storey: 0, x1: 30, y1: 0, x2: 60, y2: 12, width: 2.5, barrier_free: true, building_id: 3 }
    ]

    return corridors
}