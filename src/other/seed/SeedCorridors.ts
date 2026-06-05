import { Prisma } from "generated/prisma/client";

export function SeedCorridors(count: number): Prisma.corridorsCreateManyInput[] {

    const corridors: Prisma.corridorsCreateManyInput[] = [
        // A epulet
        { id: 1, name: "Bejárati folyosó", storey: 0, x1: -5, y1: 6, x2: -5, y2: -10, width: 4.8, barrier_free: true, is_outdoor: false, building_id: 1 },
        { id: 2, name: "Földszinti Aula", storey: 0, x1: -7, y1: -16, x2: 24, y2: -16, width: 19, barrier_free: true, is_outdoor: false, building_id: 1 },
        { id: 3, name: "Folyosó a Tesi tanári fele", storey: 0, x1: 11, y1: -7, x2: 11, y2: 38, width: 5, barrier_free: true, is_outdoor: false, building_id: 1 },
        { id: 4, name: "Folyosó A023 fele", storey: 0, x1: 11, y1: 38, x2: 45, y2: 38, width: 5, barrier_free: true, is_outdoor: false, building_id: 1 },
        { id: 5, name: "Folyosó a férfi WC felé", storey: 0, x1: 6, y1: -25, x2: 6, y2: -81, width: 5, barrier_free: true, is_outdoor: false, building_id: 1 },

        { id: 7, name: "Lépcső fele", storey: 0, x1: 29, y1: -11, x2: 24, y2: -11, width: 9, barrier_free: false, is_outdoor: false, building_id: 1 },
        { id: 8, name: "Folyosó tesiterem felé", storey: 0, x1: 48, y1: -11, x2: 29, y2: -11, width: 9, barrier_free: true, is_outdoor: false, building_id: 1 },
        { id: 9, name: "Udvar A tesi", storey: 0, x1: 33, y1: -7, x2: 33, y2: 15, width: 8, barrier_free: true, is_outdoor: true, building_id: 1 },
        { id: 10, name: "Udvar B fele", storey: 0, x1: 33, y1: 15, x2: 137, y2: 15, width: 16, barrier_free: true, is_outdoor: true, building_id: 1 },

        { id: 11, name: "ezaz", storey: 1, x1: 4, y1: -16, x2: 24, y2: -16, width: 18, barrier_free: true, is_outdoor: false, building_id: 1 },
        { id: 12, name: "hudejo", storey: 1, x1: 11, y1: -7, x2: 11, y2: 38, width: 5, barrier_free: true, is_outdoor: false, building_id: 1 },
        { id: 13, name: "igen", storey: 1, x1: 11, y1: 38, x2: 46, y2: 38, width: 5, barrier_free: true, is_outdoor: false, building_id: 1 },
        { id: 14, name: "na vegre", storey: 1, x1: 6, y1: -25, x2: 6, y2: -81, width: 5, barrier_free: true, is_outdoor: false, building_id: 1 },

        { id: 15, name: "ezaz2", storey: 2, x1: 4, y1: -16, x2: 24, y2: -16, width: 18, barrier_free: true, is_outdoor: false, building_id: 1 },
        { id: 16, name: "hudejo2", storey: 2, x1: 11, y1: -7, x2: 11, y2: 38, width: 5, barrier_free: true, is_outdoor: false, building_id: 1 },
        { id: 17, name: "igen2", storey: 2, x1: 11, y1: 38, x2: 46, y2: 38, width: 5, barrier_free: true, is_outdoor: false, building_id: 1 },
        { id: 18, name: "navegre2", storey: 2, x1: 6, y1: -25, x2: 6, y2: -80, width: 5, barrier_free: true, is_outdoor: false, building_id: 1 },
        { id: 19, name: "Folyosó a tanári mellett", storey: 2, x1: 46, y1: 53, x2: 46, y2: 38, width: 5, barrier_free: true, is_outdoor: false, building_id: 1 },

        // B epulet
        { id: 21, name: "Lépcső a B épületbe", storey: 0, x1: -55, y1: 14, x2: 9, y2: 14, width: 8, barrier_free: false, is_outdoor: true, building_id: 2 },
        { id: 22, name: "Adadálymentes út a B épületbe", storey: 0, x1: -55, y1: 22, x2: 54, y2: 22, width: 8, barrier_free: true, is_outdoor: true, building_id: 2 },
        { id: 23, name: "Akadálymentes a B-be", storey: 0, x1: 9, y1: 14, x2: 54, y2: 14, width: 8, barrier_free: true, is_outdoor: true, building_id: 2 },
        { id: 24, name: "B-be be", storey: 0, x1: 9, y1: -8, x2: 9, y2: 10, width: 8, barrier_free: true, is_outdoor: true, building_id: 2 },

        { id: 25, name: "B aula", storey: 0, x1: -61, y1: -17, x2: 43, y2: -17, width: 19, barrier_free: true, is_outdoor: false, building_id: 2 },
        { id: 26, name: "Folyosó az óriáslabor fele", storey: 0, x1: 13, y1: -26, x2: 13, y2: -43, width: 5, barrier_free: true, is_outdoor: false, building_id: 2 },
        { id: 27, name: "Másik folyosó az óriáslabor fele", storey: 0, x1: -15, y1: -43, x2: -15, y2: -26, width: 5, barrier_free: true, is_outdoor: false, building_id: 2 },
        { id: 28, name: "Sok itt a folyosó", storey: 0, x1: -36, y1: -26, x2: -36, y2: -37, width: 5, barrier_free: true, is_outdoor: false, building_id: 2 },

        { id: 29, name: "Öltöző folyosó", storey: 0, x1: 42, y1: -49, x2: 20, y2: -49, width: 3.9, barrier_free: true, is_outdoor: false, building_id: 2 },
        { id: 30, name: "Könyvár mögötti folyosó", storey: 0, x1: 34, y1: -39, x2: 34, y2: -47, width: 3.8, barrier_free: true, is_outdoor: false, building_id: 2 }
    ];

    return corridors
}