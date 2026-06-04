import { Prisma } from "generated/prisma/client";

export function SeedClassrooms(count: number, classroom_types_count: number): Prisma.classroomsCreateManyInput[] {
    // const classrooms: Prisma.classroomsCreateManyInput[] = Array.from({ length: count }, () => ({
    //     name: ,
    //     capacity: ,
    //     storey: ,
    //     x: ,
    //     y: ,
    //     size_x: ,
    //     size_y: ,
    //     size_z: ,
    //     description: ,
    //     building_id: ,
    //     type_id: 
    // }))

    // -------------------------------------------------------------------------
    // PREMISE 1 — "A" épület (building_id 1), laid out from the real floor plans.
    //
    // Coordinate convention (metres, schematic):
    //   - The main corridor runs east along the y=0 line (x: 0 -> ~52).
    //   - South-side rooms sit below it (negative y), facing north  -> rotation 0
    //   - North-side rooms sit above it (positive y), facing south  -> rotation 180
    //   - At the east end the corridor turns north into a wing (x=52):
    //       * east-side rooms (x ~59) face west  -> rotation 270
    //       * west-side rooms (x ~45) face east  -> rotation 90
    //   - A standard tanterem is ~8 x 6 x 3 (based on the original A001).
    // -------------------------------------------------------------------------
    const classrooms: Prisma.classroomsCreateManyInput[] = [
        // ===== "A" épület — földszint (storey 0) =====
        { id: 1, name: "A005", capacity: 0, storey: 0, x: 2, y: -4, rotation: 0, size_x: 4, size_y: 4, size_z: 3, description: "Férfi WC", building_id: 1, type_id: 11 },
        { id: 2, name: "A007", capacity: 24, storey: 0, x: 10, y: -5, rotation: 0, size_x: 8, size_y: 6, size_z: 3, description: "Laboratórium", building_id: 1, type_id: 3 },
        { id: 3, name: "A009", capacity: 24, storey: 0, x: 20, y: -5, rotation: 0, size_x: 8, size_y: 6, size_z: 3, description: "Laboratórium", building_id: 1, type_id: 3 },
        { id: 4, name: "A010", capacity: 30, storey: 0, x: 30, y: -5, rotation: 0, size_x: 8, size_y: 6, size_z: 3, description: "Tanterem", building_id: 1, type_id: 1 },
        { id: 5, name: "A008", capacity: 6, storey: 0, x: 14, y: 6, rotation: 180, size_x: 6, size_y: 5, size_z: 3, description: "Előkészítő", building_id: 1, type_id: 6 },
        { id: 6, name: "A027", capacity: 2, storey: 0, x: 38, y: -4, rotation: 0, size_x: 4, size_y: 4, size_z: 3, description: "Porta", building_id: 1, type_id: 12 },
        { id: 7, name: "A024", capacity: 0, storey: 0, x: 43, y: -4, rotation: 0, size_x: 4, size_y: 4, size_z: 3, description: "Női WC", building_id: 1, type_id: 11 },
        { id: 8, name: "A026", capacity: 0, storey: 0, x: 48, y: -4, rotation: 0, size_x: 4, size_y: 4, size_z: 3, description: "Akadálymentes WC", building_id: 1, type_id: 11 },
        { id: 9, name: "A037", capacity: 60, storey: 0, x: 30, y: 18, rotation: 180, size_x: 16, size_y: 12, size_z: 6, description: "Tornaterem", building_id: 1, type_id: 9 },
        { id: 10, name: "A032", capacity: 20, storey: 0, x: 23, y: 8, rotation: 180, size_x: 6, size_y: 5, size_z: 3, description: "Tornatermi öltöző", building_id: 1, type_id: 10 },
        { id: 11, name: "A034", capacity: 20, storey: 0, x: 34, y: 8, rotation: 180, size_x: 6, size_y: 5, size_z: 3, description: "Tornatermi öltöző", building_id: 1, type_id: 10 },
        { id: 12, name: "A014", capacity: 24, storey: 0, x: 45, y: 8, rotation: 90, size_x: 8, size_y: 6, size_z: 3, description: "Laboratórium", building_id: 1, type_id: 3 },
        { id: 13, name: "A015", capacity: 30, storey: 0, x: 45, y: 17, rotation: 90, size_x: 8, size_y: 6, size_z: 3, description: "Tanterem", building_id: 1, type_id: 1 },
        { id: 14, name: "A016", capacity: 10, storey: 0, x: 59, y: 6, rotation: 270, size_x: 6, size_y: 6, size_z: 3, description: "Tanári szoba", building_id: 1, type_id: 5 },
        { id: 15, name: "A017", capacity: 6, storey: 0, x: 59, y: 14, rotation: 270, size_x: 6, size_y: 6, size_z: 3, description: "Igazgató helyettes", building_id: 1, type_id: 8 },
        { id: 16, name: "A018", capacity: 24, storey: 0, x: 59, y: 23, rotation: 270, size_x: 8, size_y: 6, size_z: 3, description: "Informatika", building_id: 1, type_id: 4 },
        { id: 17, name: "A023", capacity: 24, storey: 0, x: 59, y: 32, rotation: 270, size_x: 8, size_y: 6, size_z: 3, description: "Informatika", building_id: 1, type_id: 4 },

        // ===== "A" épület — 1. emelet (storey 1) =====
        { id: 18, name: "A103", capacity: 0, storey: 1, x: 2, y: -4, rotation: 0, size_x: 4, size_y: 4, size_z: 3, description: "Férfi WC", building_id: 1, type_id: 11 },
        { id: 19, name: "A105", capacity: 24, storey: 1, x: 10, y: -5, rotation: 0, size_x: 8, size_y: 6, size_z: 3, description: "Laboratórium", building_id: 1, type_id: 3 },
        { id: 20, name: "A106", capacity: 24, storey: 1, x: 19, y: -5, rotation: 0, size_x: 8, size_y: 6, size_z: 3, description: "Laboratórium", building_id: 1, type_id: 3 },
        { id: 21, name: "A108", capacity: 24, storey: 1, x: 29, y: -5, rotation: 0, size_x: 8, size_y: 6, size_z: 3, description: "Laboratórium", building_id: 1, type_id: 3 },
        { id: 22, name: "A109", capacity: 12, storey: 1, x: 35, y: 6, rotation: 180, size_x: 6, size_y: 5, size_z: 3, description: "Csoport szoba", building_id: 1, type_id: 7 },
        { id: 23, name: "A110", capacity: 10, storey: 1, x: 41, y: 6, rotation: 180, size_x: 6, size_y: 5, size_z: 3, description: "Tanári szoba", building_id: 1, type_id: 5 },
        { id: 24, name: "A133", capacity: 10, storey: 1, x: 18, y: 7, rotation: 180, size_x: 6, size_y: 5, size_z: 3, description: "Tanári szoba", building_id: 1, type_id: 5 },
        { id: 25, name: "A132", capacity: 6, storey: 1, x: 25, y: 7, rotation: 180, size_x: 6, size_y: 5, size_z: 3, description: "Igazgató helyettes", building_id: 1, type_id: 8 },
        { id: 26, name: "A131", capacity: 10, storey: 1, x: 32, y: 11, rotation: 180, size_x: 6, size_y: 5, size_z: 3, description: "Tanári szoba", building_id: 1, type_id: 5 },
        { id: 27, name: "A116", capacity: 10, storey: 1, x: 40, y: 11, rotation: 180, size_x: 6, size_y: 5, size_z: 3, description: "Tanári szoba", building_id: 1, type_id: 5 },
        { id: 28, name: "A117", capacity: 24, storey: 1, x: 45, y: 9, rotation: 90, size_x: 8, size_y: 6, size_z: 3, description: "Informatika", building_id: 1, type_id: 4 },
        { id: 29, name: "A118", capacity: 24, storey: 1, x: 45, y: 18, rotation: 90, size_x: 8, size_y: 6, size_z: 3, description: "Informatika", building_id: 1, type_id: 4 },
        { id: 30, name: "A114", capacity: 0, storey: 1, x: 38, y: -4, rotation: 0, size_x: 4, size_y: 4, size_z: 3, description: "Dohányzó", building_id: 1, type_id: 12 },
        { id: 31, name: "A126", capacity: 0, storey: 1, x: 43, y: -4, rotation: 0, size_x: 4, size_y: 4, size_z: 3, description: "Női WC", building_id: 1, type_id: 11 },
        { id: 32, name: "A127", capacity: 0, storey: 1, x: 48, y: -4, rotation: 0, size_x: 4, size_y: 4, size_z: 3, description: "Tanári WC", building_id: 1, type_id: 11 },
        { id: 33, name: "A128", capacity: 0, storey: 1, x: 52, y: -4, rotation: 0, size_x: 4, size_y: 4, size_z: 3, description: "Akadálymentes WC", building_id: 1, type_id: 11 },
        { id: 34, name: "A119", capacity: 30, storey: 1, x: 59, y: 6, rotation: 270, size_x: 8, size_y: 6, size_z: 3, description: "Tanterem", building_id: 1, type_id: 1 },
        { id: 35, name: "A120", capacity: 24, storey: 1, x: 59, y: 15, rotation: 270, size_x: 8, size_y: 6, size_z: 3, description: "Informatika", building_id: 1, type_id: 4 },
        { id: 36, name: "A121", capacity: 24, storey: 1, x: 59, y: 24, rotation: 270, size_x: 8, size_y: 6, size_z: 3, description: "Informatika", building_id: 1, type_id: 4 },
        { id: 37, name: "A123", capacity: 30, storey: 1, x: 59, y: 33, rotation: 270, size_x: 8, size_y: 6, size_z: 3, description: "Tanterem", building_id: 1, type_id: 1 },

        // ===== "A" épület — 2. emelet (storey 2) =====
        { id: 38, name: "A203", capacity: 0, storey: 2, x: 2, y: -4, rotation: 0, size_x: 4, size_y: 4, size_z: 3, description: "Férfi WC", building_id: 1, type_id: 11 },
        { id: 39, name: "A205", capacity: 30, storey: 2, x: 10, y: -5, rotation: 0, size_x: 8, size_y: 6, size_z: 3, description: "Tanterem", building_id: 1, type_id: 1 },
        { id: 40, name: "A206", capacity: 30, storey: 2, x: 19, y: -5, rotation: 0, size_x: 8, size_y: 6, size_z: 3, description: "Tanterem", building_id: 1, type_id: 1 },
        { id: 41, name: "A208", capacity: 60, storey: 2, x: 29, y: -5, rotation: 0, size_x: 8, size_y: 6, size_z: 3, description: "Fizika előadó", building_id: 1, type_id: 2 },
        { id: 42, name: "A207", capacity: 6, storey: 2, x: 14, y: 6, rotation: 180, size_x: 5, size_y: 4, size_z: 3, description: "Előkészítő", building_id: 1, type_id: 6 },
        { id: 43, name: "A209", capacity: 10, storey: 2, x: 21, y: 6, rotation: 180, size_x: 5, size_y: 5, size_z: 3, description: "Tanári szoba", building_id: 1, type_id: 5 },
        { id: 44, name: "A210", capacity: 30, storey: 2, x: 29, y: 6, rotation: 180, size_x: 8, size_y: 6, size_z: 3, description: "Tanterem", building_id: 1, type_id: 1 },
        { id: 45, name: "A215", capacity: 30, storey: 2, x: 40, y: -5, rotation: 0, size_x: 8, size_y: 6, size_z: 3, description: "Tanterem", building_id: 1, type_id: 1 },
        { id: 46, name: "A216", capacity: 30, storey: 2, x: 49, y: -5, rotation: 0, size_x: 8, size_y: 6, size_z: 3, description: "Tanterem", building_id: 1, type_id: 1 },
        { id: 47, name: "A213", capacity: 10, storey: 2, x: 38, y: -4, rotation: 0, size_x: 5, size_y: 4, size_z: 3, description: "Tanári szoba", building_id: 1, type_id: 5 },
        { id: 48, name: "A224", capacity: 0, storey: 2, x: 44, y: 6, rotation: 180, size_x: 4, size_y: 4, size_z: 3, description: "Női WC", building_id: 1, type_id: 11 },
        { id: 49, name: "A225", capacity: 0, storey: 2, x: 49, y: 6, rotation: 180, size_x: 4, size_y: 4, size_z: 3, description: "Tanári WC", building_id: 1, type_id: 11 },
        { id: 50, name: "A226", capacity: 0, storey: 2, x: 54, y: 6, rotation: 180, size_x: 4, size_y: 4, size_z: 3, description: "Akadálymentes WC", building_id: 1, type_id: 11 },
        { id: 51, name: "A217", capacity: 30, storey: 2, x: 59, y: 6, rotation: 270, size_x: 8, size_y: 6, size_z: 3, description: "Tanterem", building_id: 1, type_id: 1 },
        { id: 52, name: "A218", capacity: 30, storey: 2, x: 59, y: 15, rotation: 270, size_x: 8, size_y: 6, size_z: 3, description: "Tanterem", building_id: 1, type_id: 1 },
        { id: 53, name: "A219", capacity: 10, storey: 2, x: 59, y: 24, rotation: 270, size_x: 6, size_y: 6, size_z: 3, description: "Tanári szoba", building_id: 1, type_id: 5 },
        { id: 54, name: "A220", capacity: 30, storey: 2, x: 59, y: 33, rotation: 270, size_x: 8, size_y: 6, size_z: 3, description: "Tanterem", building_id: 1, type_id: 1 },
        { id: 55, name: "A222", capacity: 24, storey: 2, x: 59, y: 42, rotation: 270, size_x: 8, size_y: 6, size_z: 3, description: "Informatika", building_id: 1, type_id: 4 },

        // -------------------------------------------------------------------------
        // PREMISE 1 — "B" épület (building_id 2), from the real floor plans.
        //
        // "B" is a rectangular block with a central core (WCs + lift + stairs)
        // ringed by a corridor. Coordinate convention (local to the building):
        //   - West-column rooms (x ~6)  face east  -> rotation 90
        //   - East-column rooms (x ~36) face west  -> rotation 270
        //   - North rooms (y ~40)       face south -> rotation 180
        //   - Central core WCs sit around x ~22 (small 3x3 rooms).
        // -------------------------------------------------------------------------
        // ===== "B" épület — földszint (storey 0) =====
        { id: 56, name: "B013", capacity: 24, storey: 0, x: 6, y: 24, rotation: 90, size_x: 8, size_y: 6, size_z: 3, description: "Laboratórium", building_id: 2, type_id: 3 },
        { id: 57, name: "B014", capacity: 24, storey: 0, x: 6, y: 16, rotation: 90, size_x: 8, size_y: 6, size_z: 3, description: "Laboratórium", building_id: 2, type_id: 3 },
        { id: 58, name: "B017", capacity: 24, storey: 0, x: 6, y: 8, rotation: 90, size_x: 8, size_y: 6, size_z: 3, description: "Laboratórium", building_id: 2, type_id: 3 },
        { id: 59, name: "B051", capacity: 4, storey: 0, x: 4, y: 40, rotation: 180, size_x: 5, size_y: 4, size_z: 3, description: "Pszichológus", building_id: 2, type_id: 12 },
        { id: 60, name: "B043", capacity: 6, storey: 0, x: 4, y: 34, rotation: 90, size_x: 6, size_y: 5, size_z: 3, description: "Iroda", building_id: 2, type_id: 8 },
        { id: 61, name: "B044/B", capacity: 8, storey: 0, x: 4, y: 28, rotation: 90, size_x: 5, size_y: 4, size_z: 3, description: "Diákönkormányzat", building_id: 2, type_id: 12 },
        { id: 62, name: "B044/A", capacity: 4, storey: 0, x: 11, y: 40, rotation: 180, size_x: 6, size_y: 5, size_z: 3, description: "Könyvtáros", building_id: 2, type_id: 8 },
        { id: 63, name: "B048", capacity: 20, storey: 0, x: 11, y: 34, rotation: 180, size_x: 6, size_y: 5, size_z: 3, description: "Öltöző", building_id: 2, type_id: 10 },
        { id: 64, name: "B045", capacity: 20, storey: 0, x: 19, y: 38, rotation: 180, size_x: 8, size_y: 6, size_z: 3, description: "Könyvtár", building_id: 2, type_id: 25 },
        { id: 65, name: "B041", capacity: 10, storey: 0, x: 36, y: 40, rotation: 270, size_x: 6, size_y: 6, size_z: 3, description: "Tanári szoba", building_id: 2, type_id: 5 },
        { id: 66, name: "B003", capacity: 2, storey: 0, x: 36, y: 30, rotation: 270, size_x: 5, size_y: 4, size_z: 3, description: "Porta", building_id: 2, type_id: 12 },
        { id: 67, name: "B005", capacity: 10, storey: 0, x: 36, y: 24, rotation: 270, size_x: 6, size_y: 5, size_z: 3, description: "Büfé", building_id: 2, type_id: 12 },
        { id: 68, name: "B006", capacity: 20, storey: 0, x: 36, y: 18, rotation: 270, size_x: 6, size_y: 5, size_z: 3, description: "Diákközpont", building_id: 2, type_id: 12 },
        { id: 69, name: "B007", capacity: 6, storey: 0, x: 36, y: 12, rotation: 270, size_x: 6, size_y: 5, size_z: 3, description: "Igazgató helyettes", building_id: 2, type_id: 8 },
        { id: 70, name: "B008", capacity: 4, storey: 0, x: 36, y: 6, rotation: 270, size_x: 5, size_y: 4, size_z: 3, description: "Orvosi szoba", building_id: 2, type_id: 12 },
        { id: 71, name: "B035", capacity: 0, storey: 0, x: 22, y: 28, rotation: 0, size_x: 3, size_y: 3, size_z: 3, description: "Személyzeti WC", building_id: 2, type_id: 11 },
        { id: 72, name: "B033", capacity: 0, storey: 0, x: 22, y: 24, rotation: 0, size_x: 3, size_y: 3, size_z: 3, description: "Akadálymentes WC", building_id: 2, type_id: 11 },
        { id: 73, name: "B032", capacity: 0, storey: 0, x: 22, y: 20, rotation: 0, size_x: 3, size_y: 3, size_z: 3, description: "Női WC", building_id: 2, type_id: 11 },
        { id: 74, name: "B029", capacity: 0, storey: 0, x: 16, y: 20, rotation: 0, size_x: 3, size_y: 3, size_z: 3, description: "Férfi WC", building_id: 2, type_id: 11 },

        // ===== "B" épület — 1. emelet (storey 1) =====
        { id: 75, name: "B116", capacity: 60, storey: 1, x: 14, y: 40, rotation: 180, size_x: 10, size_y: 7, size_z: 3, description: "Előadó terem", building_id: 2, type_id: 2 },
        { id: 76, name: "B112", capacity: 12, storey: 1, x: 36, y: 40, rotation: 270, size_x: 6, size_y: 5, size_z: 3, description: "Tárgyaló", building_id: 2, type_id: 8 },
        { id: 77, name: "B111", capacity: 6, storey: 1, x: 36, y: 33, rotation: 270, size_x: 6, size_y: 5, size_z: 3, description: "Igazgató helyettes", building_id: 2, type_id: 8 },
        { id: 78, name: "B110", capacity: 6, storey: 1, x: 36, y: 27, rotation: 270, size_x: 6, size_y: 5, size_z: 3, description: "Gazdasági iroda", building_id: 2, type_id: 8 },
        { id: 79, name: "B107", capacity: 4, storey: 1, x: 36, y: 21, rotation: 270, size_x: 6, size_y: 5, size_z: 3, description: "Gazdasági vezető", building_id: 2, type_id: 8 },
        { id: 80, name: "B106", capacity: 4, storey: 1, x: 36, y: 15, rotation: 270, size_x: 6, size_y: 5, size_z: 3, description: "Igazgató", building_id: 2, type_id: 8 },
        { id: 81, name: "B105", capacity: 6, storey: 1, x: 36, y: 9, rotation: 270, size_x: 6, size_y: 5, size_z: 3, description: "Titkárság", building_id: 2, type_id: 8 },
        { id: 82, name: "B103", capacity: 10, storey: 1, x: 36, y: 3, rotation: 270, size_x: 6, size_y: 6, size_z: 3, description: "Tanári", building_id: 2, type_id: 5 },
        { id: 83, name: "B118", capacity: 24, storey: 1, x: 6, y: 30, rotation: 90, size_x: 8, size_y: 6, size_z: 3, description: "Laboratórium", building_id: 2, type_id: 3 },
        { id: 84, name: "B119", capacity: 24, storey: 1, x: 6, y: 23, rotation: 90, size_x: 8, size_y: 6, size_z: 3, description: "Laboratórium", building_id: 2, type_id: 3 },
        { id: 85, name: "B120", capacity: 24, storey: 1, x: 6, y: 16, rotation: 90, size_x: 8, size_y: 6, size_z: 3, description: "Laboratórium", building_id: 2, type_id: 3 },
        { id: 86, name: "B121", capacity: 6, storey: 1, x: 6, y: 9, rotation: 90, size_x: 6, size_y: 5, size_z: 3, description: "Előkészítő", building_id: 2, type_id: 6 },
        { id: 87, name: "B141", capacity: 0, storey: 1, x: 22, y: 30, rotation: 0, size_x: 3, size_y: 3, size_z: 3, description: "Tanári WC", building_id: 2, type_id: 11 },
        { id: 88, name: "B140", capacity: 0, storey: 1, x: 22, y: 25, rotation: 0, size_x: 3, size_y: 3, size_z: 3, description: "Akadálymentes WC", building_id: 2, type_id: 11 },
        { id: 89, name: "B137", capacity: 0, storey: 1, x: 22, y: 20, rotation: 0, size_x: 3, size_y: 3, size_z: 3, description: "Férfi WC", building_id: 2, type_id: 11 },
        { id: 90, name: "B138", capacity: 0, storey: 1, x: 22, y: 15, rotation: 0, size_x: 3, size_y: 3, size_z: 3, description: "Női WC", building_id: 2, type_id: 11 },

        // ===== "B" épület — 2. emelet (storey 2) =====
        { id: 91, name: "B210", capacity: 60, storey: 2, x: 14, y: 42, rotation: 180, size_x: 10, size_y: 7, size_z: 3, description: "Előadó terem", building_id: 2, type_id: 2 },
        { id: 92, name: "B208", capacity: 10, storey: 2, x: 20, y: 44, rotation: 180, size_x: 6, size_y: 5, size_z: 3, description: "Tanári szoba", building_id: 2, type_id: 5 },
        { id: 93, name: "B207", capacity: 30, storey: 2, x: 36, y: 42, rotation: 270, size_x: 8, size_y: 6, size_z: 3, description: "Tanterem", building_id: 2, type_id: 1 },
        { id: 94, name: "B206", capacity: 30, storey: 2, x: 36, y: 34, rotation: 270, size_x: 8, size_y: 6, size_z: 3, description: "Tanterem", building_id: 2, type_id: 1 },
        { id: 95, name: "B205", capacity: 30, storey: 2, x: 36, y: 26, rotation: 270, size_x: 8, size_y: 6, size_z: 3, description: "Tanterem", building_id: 2, type_id: 1 },
        { id: 96, name: "B204", capacity: 30, storey: 2, x: 36, y: 18, rotation: 270, size_x: 8, size_y: 6, size_z: 3, description: "Tanterem", building_id: 2, type_id: 1 },
        { id: 97, name: "B213", capacity: 24, storey: 2, x: 6, y: 36, rotation: 90, size_x: 8, size_y: 6, size_z: 3, description: "Laboratórium", building_id: 2, type_id: 3 },
        { id: 98, name: "B214", capacity: 24, storey: 2, x: 6, y: 29, rotation: 90, size_x: 8, size_y: 6, size_z: 3, description: "Laboratórium", building_id: 2, type_id: 3 },
        { id: 99, name: "B215", capacity: 24, storey: 2, x: 6, y: 22, rotation: 90, size_x: 8, size_y: 6, size_z: 3, description: "Laboratórium", building_id: 2, type_id: 3 },
        { id: 100, name: "B216", capacity: 24, storey: 2, x: 6, y: 15, rotation: 90, size_x: 8, size_y: 6, size_z: 3, description: "Laboratórium", building_id: 2, type_id: 3 },
        { id: 101, name: "B238", capacity: 0, storey: 2, x: 22, y: 37, rotation: 0, size_x: 3, size_y: 3, size_z: 3, description: "Tanári WC", building_id: 2, type_id: 11 },
        { id: 102, name: "B235", capacity: 0, storey: 2, x: 22, y: 32, rotation: 0, size_x: 3, size_y: 3, size_z: 3, description: "Akadálymentes WC", building_id: 2, type_id: 11 },
        { id: 103, name: "B234", capacity: 0, storey: 2, x: 22, y: 27, rotation: 0, size_x: 3, size_y: 3, size_z: 3, description: "Női WC", building_id: 2, type_id: 11 },
        { id: 104, name: "B231", capacity: 0, storey: 2, x: 22, y: 22, rotation: 0, size_x: 3, size_y: 3, size_z: 3, description: "Férfi WC", building_id: 2, type_id: 11 },
        { id: 105, name: "B230", capacity: 16, storey: 2, x: 22, y: 16, rotation: 0, size_x: 6, size_y: 5, size_z: 3, description: "Laboratórium", building_id: 2, type_id: 3 },
        { id: 106, name: "B223", capacity: 16, storey: 2, x: 22, y: 10, rotation: 0, size_x: 6, size_y: 5, size_z: 3, description: "Laboratórium", building_id: 2, type_id: 3 },
        { id: 107, name: "B212", capacity: 16, storey: 2, x: 15, y: 10, rotation: 0, size_x: 6, size_y: 5, size_z: 3, description: "Laboratórium", building_id: 2, type_id: 3 },

        // ===== "B" épület — 3. emelet (storey 3) =====
        { id: 108, name: "B311", capacity: 60, storey: 3, x: 14, y: 42, rotation: 180, size_x: 10, size_y: 7, size_z: 3, description: "Előadó terem", building_id: 2, type_id: 2 },
        { id: 109, name: "B309", capacity: 10, storey: 3, x: 20, y: 44, rotation: 180, size_x: 6, size_y: 5, size_z: 3, description: "Tanári szoba", building_id: 2, type_id: 5 },
        { id: 110, name: "B307", capacity: 30, storey: 3, x: 36, y: 42, rotation: 270, size_x: 8, size_y: 6, size_z: 3, description: "Tanterem", building_id: 2, type_id: 1 },
        { id: 111, name: "B306", capacity: 30, storey: 3, x: 36, y: 34, rotation: 270, size_x: 8, size_y: 6, size_z: 3, description: "Tanterem", building_id: 2, type_id: 1 },
        { id: 112, name: "B305", capacity: 30, storey: 3, x: 36, y: 27, rotation: 270, size_x: 8, size_y: 6, size_z: 3, description: "Tanterem", building_id: 2, type_id: 1 },
        { id: 113, name: "B304", capacity: 30, storey: 3, x: 36, y: 20, rotation: 270, size_x: 8, size_y: 6, size_z: 3, description: "Tanterem", building_id: 2, type_id: 1 },
        { id: 114, name: "B303", capacity: 30, storey: 3, x: 36, y: 13, rotation: 270, size_x: 8, size_y: 6, size_z: 3, description: "Tanterem", building_id: 2, type_id: 1 },
        { id: 115, name: "B315", capacity: 24, storey: 3, x: 6, y: 30, rotation: 90, size_x: 8, size_y: 6, size_z: 3, description: "Laboratórium", building_id: 2, type_id: 3 },
        { id: 116, name: "B316", capacity: 24, storey: 3, x: 6, y: 18, rotation: 90, size_x: 8, size_y: 6, size_z: 3, description: "Laboratórium", building_id: 2, type_id: 3 },
        { id: 117, name: "B336", capacity: 0, storey: 3, x: 22, y: 30, rotation: 0, size_x: 3, size_y: 3, size_z: 3, description: "Akadálymentes WC", building_id: 2, type_id: 11 },
        { id: 118, name: "B335", capacity: 0, storey: 3, x: 22, y: 25, rotation: 0, size_x: 3, size_y: 3, size_z: 3, description: "Női WC", building_id: 2, type_id: 11 },
        { id: 119, name: "B332", capacity: 0, storey: 3, x: 22, y: 20, rotation: 0, size_x: 3, size_y: 3, size_z: 3, description: "Férfi WC", building_id: 2, type_id: 11 },
        { id: 120, name: "B323", capacity: 16, storey: 3, x: 22, y: 13, rotation: 0, size_x: 6, size_y: 5, size_z: 3, description: "Laboratórium", building_id: 2, type_id: 3 },

        // ===== PREMISE 2 (proba) — "A" épület (building_id 3) =====
        { id: 121, name: "A001", capacity: 30, storey: 0, x: 8, y: 0, rotation: 0, size_x: 8, size_y: 6, size_z: 3, description: "Földszinti előadó", building_id: 3, type_id: 14 },
        { id: 122, name: "A002", capacity: 24, storey: 0, x: 44, y: 0, rotation: 0, size_x: 6, size_y: 6, size_z: 3, description: "Földszinti tanterem", building_id: 3, type_id: 13 },
        { id: 123, name: "A003", capacity: 24, storey: 0, x: 72, y: 0, rotation: 0, size_x: 6, size_y: 6, size_z: 3, description: "Földszinti tanterem", building_id: 3, type_id: 13 },
        { id: 124, name: "A004", capacity: 30, storey: 0, x: 8, y: 0, rotation: 180, size_x: 8, size_y: 6, size_z: 3, description: "Étkező", building_id: 3, type_id: 23 },
        { id: 125, name: "A005", capacity: 20, storey: 0, x: 44, y: 0, rotation: 180, size_x: 6, size_y: 6, size_z: 3, description: "Iroda", building_id: 3, type_id: 20 },
        { id: 126, name: "A010", capacity: 20, storey: 0, x: 96, y: 24, rotation: 90, size_x: 6, size_y: 5, size_z: 3, description: "Könyvtár", building_id: 3, type_id: 22 },
        { id: 127, name: "A011", capacity: 20, storey: 0, x: 96, y: 52, rotation: 90, size_x: 6, size_y: 5, size_z: 3, description: "Olvasóterem", building_id: 3, type_id: 22 },
        { id: 128, name: "A101", capacity: 30, storey: 1, x: 8, y: 0, rotation: 0, size_x: 8, size_y: 6, size_z: 3, description: "Informatika labor", building_id: 3, type_id: 17 },
        { id: 129, name: "A102", capacity: 24, storey: 1, x: 44, y: 0, rotation: 0, size_x: 6, size_y: 6, size_z: 3, description: "Tanterem", building_id: 3, type_id: 13 },
        { id: 130, name: "A103", capacity: 24, storey: 1, x: 72, y: 0, rotation: 0, size_x: 6, size_y: 6, size_z: 3, description: "Tanterem", building_id: 3, type_id: 13 },
        { id: 131, name: "A104", capacity: 30, storey: 1, x: 8, y: 0, rotation: 180, size_x: 8, size_y: 6, size_z: 3, description: "Nyelvi labor", building_id: 3, type_id: 18 },
        { id: 132, name: "A105", capacity: 24, storey: 1, x: 44, y: 0, rotation: 180, size_x: 6, size_y: 6, size_z: 3, description: "Tanterem", building_id: 3, type_id: 13 },
        { id: 133, name: "A110", capacity: 20, storey: 1, x: 96, y: 24, rotation: 90, size_x: 6, size_y: 5, size_z: 3, description: "Tanárl", building_id: 3, type_id: 19 },
        { id: 134, name: "A201", capacity: 24, storey: 2, x: 8, y: 0, rotation: 0, size_x: 6, size_y: 6, size_z: 3, description: "Kémia labor", building_id: 3, type_id: 15 },
        { id: 135, name: "A202", capacity: 24, storey: 2, x: 8, y: 0, rotation: 180, size_x: 6, size_y: 6, size_z: 3, description: "Fizika labor", building_id: 3, type_id: 16 },

        // ===== PREMISE 2 (proba) — "B" épület (building_id 4) =====
        { id: 136, name: "B001", capacity: 60, storey: 0, x: 8, y: 0, rotation: 0, size_x: 10, size_y: 8, size_z: 4, description: "Tornaterem", building_id: 4, type_id: 21 },
        { id: 137, name: "B101", capacity: 24, storey: 1, x: 8, y: 0, rotation: 0, size_x: 6, size_y: 6, size_z: 3, description: "Tanterem", building_id: 4, type_id: 13 },
        { id: 138, name: "B102", capacity: 24, storey: 1, x: 40, y: 0, rotation: 0, size_x: 6, size_y: 6, size_z: 3, description: "Tanterem", building_id: 4, type_id: 13 },
        { id: 139, name: "B103", capacity: 24, storey: 1, x: 8, y: 0, rotation: 180, size_x: 6, size_y: 6, size_z: 3, description: "Tanterem", building_id: 4, type_id: 13 },
        { id: 140, name: "B104", capacity: 24, storey: 1, x: 40, y: 0, rotation: 180, size_x: 6, size_y: 6, size_z: 3, description: "Tanterem", building_id: 4, type_id: 13 },
    ]

    return classrooms
}