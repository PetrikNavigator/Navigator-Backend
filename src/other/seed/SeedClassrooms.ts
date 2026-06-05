import { Prisma } from "generated/prisma/client";

export function SeedClassrooms(count: number, classroom_types_count: number): Prisma.classroomsCreateManyInput[] {
    const classrooms: Prisma.classroomsCreateManyInput[] = [
        // foldszint

        { id: 1, name: "A porta", capacity: 4, storey: 0, x: 3, y: -2, rotation: 270, size_x: 8, size_y: 11, size_z: 6, description: "A épület porta", building_id: 1, type_id: 30 },
        { id: 2, name: "A014", capacity: 1, storey: 0, x: 21, y: 4, rotation: 90, size_x: 20, size_y: 15, size_z: 6, description: "Homokminta elemző labor", building_id: 1, type_id: 3 },
        { id: 3, name: "A015", capacity: 1, storey: 0, x: 21, y: 25, rotation: 90, size_x: 20, size_y: 15, size_z: 6, description: "Gőgh Zsolt", building_id: 1, type_id: 3 },
        { id: 4, name: "A016", capacity: 1, storey: 0, x: 11, y: 48, rotation: 180, size_x: 6, size_y: 15, size_z: 6, description: "Király Zanza", building_id: 1, type_id: 5 },
        { id: 5, name: "A017", capacity: 1, storey: 0, x: 18, y: 48, rotation: 180, size_x: 6, size_y: 15, size_z: 6, description: "Ősfasz", building_id: 1, type_id: 27 },
        { id: 6, name: "A018", capacity: 1, storey: 0, x: 33, y: 48, rotation: 180, size_x: 22, size_y: 15, size_z: 6, description: "Kecskepornó", building_id: 1, type_id: 4 },
        { id: 7, name: "A023", capacity: 1, storey: 0, x: 55, y: 39, rotation: 90, size_x: 18, size_y: 20, size_z: 6, description: "ezaz ezaz hu de jo", building_id: 1, type_id: 4 },

        { id: 8, name: "A010", capacity: 32, storey: 0, x: 16, y: -33, rotation: 90, size_x: 15, size_y: 15, size_z: 6, description: "Kiséretségi", building_id: 1, type_id: 1 },
        { id: 9, name: "A009", capacity: 15, storey: 0, x: 16, y: -52, rotation: 90, size_x: 21, size_y: 15, size_z: 6, description: "Kotyvasztó labor", building_id: 1, type_id: 3 },
        { id: 10, name: "A007", capacity: 15, storey: 0, x: 16, y: -78, rotation: 90, size_x: 17, size_y: 15, size_z: 6, description: "Kotyvasztó labor 2", building_id: 1, type_id: 3 },

        { id: 11, name: "A037", capacity: 1, storey: 0, x: 59, y: -11, rotation: 90, size_x: 31, size_y: 21, size_z: 10, description: "Tesiterem", building_id: 1, type_id: 32 },
        { id: 12, name: "A034", capacity: 1, storey: 0, x: 43, y: -1, rotation: 180, size_x: 10, size_y: 11, size_z: 6, description: "fiú öltöző", building_id: 1, type_id: 31 },
        { id: 13, name: "A032", capacity: 1, storey: 0, x: 43, y: -21, rotation: 0, size_x: 10, size_y: 11, size_z: 6, description: "Tot Bela", building_id: 1, type_id: 31 },

        { id: 14, name: "A108", capacity: 1, storey: 1, x: 16, y: -48, rotation: 90, size_x: 13, size_y: 15, size_z: 6, description: "terem", building_id: 1, type_id: 3 },
        { id: 15, name: "A109", capacity: 1, storey: 1, x: 16, y: -36, rotation: 90, size_x: 9, size_y: 15, size_z: 6, description: "Tóth Éva", building_id: 1, type_id: 7 },
        { id: 16, name: "A110", capacity: 1, storey: 1, x: 16, y: -27, rotation: 90, size_x: 7, size_y: 15, size_z: 6, description: "Tanári", building_id: 1, type_id: 5 },
        { id: 17, name: "A106", capacity: 1, storey: 1, x: 16, y: -62, rotation: 90, size_x: 13, size_y: 15, size_z: 6, description: "Laboránsok laborja", building_id: 1, type_id: 3 },
        { id: 18, name: "A105", capacity: 1, storey: 1, x: 16, y: -79, rotation: 90, size_x: 19, size_y: 15, size_z: 6, description: "hu de jo", building_id: 1, type_id: 3 },

        { id: 19, name: "A116", capacity: 1, storey: 1, x: 21, y: -4, rotation: 90, size_x: 10, size_y: 15, size_z: 6, description: "itt büdös van!", building_id: 1, type_id: 5 },
        { id: 20, name: "A117", capacity: 1, storey: 1, x: 21, y: 10, rotation: 90, size_x: 16, size_y: 15, size_z: 6, description: "borzalom", building_id: 1, type_id: 4 },
        { id: 21, name: "A118", capacity: 1, storey: 1, x: 21, y: 27, rotation: 90, size_x: 16, size_y: 15, size_z: 6, description: "masik borzalom", building_id: 1, type_id: 4 },

        { id: 22, name: "A119", capacity: 1, storey: 1, x: 10, y: 48, rotation: 180, size_x: 14, size_y: 15, size_z: 6, description: "potyi", building_id: 1, type_id: 1 },
        { id: 23, name: "A120", capacity: 1, storey: 1, x: 25, y: 48, rotation: 180, size_x: 14, size_y: 15, size_z: 6, description: "iszonyatos halozat terem 1", building_id: 1, type_id: 4 },
        { id: 24, name: "A121", capacity: 1, storey: 1, x: 39, y: 48, rotation: 180, size_x: 12, size_y: 15, size_z: 6, description: "iszonyatos halozat 2", building_id: 1, type_id: 4 },
        { id: 25, name: "A123", capacity: 1, storey: 1, x: 54, y: 38, rotation: 90, size_x: 12, size_y: 17, size_z: 6, description: "E", building_id: 1, type_id: 1 },
        { id: 26, name: "A122", capacity: 1, storey: 1, x: 54, y: 50, rotation: 90, size_x: 10, size_y: 17, size_z: 6, description: "iszonyatos halozat 3", building_id: 1, type_id: 4 },

        { id: 27, name: "A126", capacity: 1, storey: 1, x: 4, y: 7, rotation: 270, size_x: 10, size_y: 8, size_z: 6, description: "lány wc", building_id: 1, type_id: 28 },
        { id: 28, name: "A127", capacity: 1, storey: 1, x: 4, y: -1, rotation: 270, size_x: 4, size_y: 8, size_z: 6, description: "big j wc", building_id: 1, type_id: 33 },
        { id: 29, name: "A128", capacity: 1, storey: 1, x: 4, y: -6, rotation: 270, size_x: 4, size_y: 8, size_z: 6, description: "event hely", building_id: 1, type_id: 29 },

        { id: 30, name: "A205", capacity: 1, storey: 2, x: 16, y: -79, rotation: 90, size_x: 15, size_y: 15, size_z: 6, description: "kiralyok terme", building_id: 1, type_id: 1 },
        { id: 31, name: "A203", capacity: 1, storey: 2, x: 5, y: -85, rotation: 0, size_x: 5, size_y: 9, size_z: 6, description: "veszelyes feliratok", building_id: 1, type_id: 26 },
        { id: 32, name: "A206", capacity: 1, storey: 2, x: 16, y: -63, rotation: 90, size_x: 15, size_y: 15, size_z: 6, description: "valami terem", building_id: 1, type_id: 1 },
        { id: 33, name: "A207", capacity: 1, storey: 2, x: 16, y: -53, rotation: 90, size_x: 3, size_y: 15, size_z: 6, description: "labor ize", building_id: 1, type_id: 6 },
        { id: 34, name: "A208", capacity: 1, storey: 2, x: 16, y: -45, rotation: 90, size_x: 11, size_y: 15, size_z: 6, description: "fizika ezaz hu de jo", building_id: 1, type_id: 1 },
        { id: 35, name: "A209", capacity: 1, storey: 2, x: 16, y: -37, rotation: 90, size_x: 3, size_y: 15, size_z: 6, description: "fizika cucc ez is gondolom", building_id: 1, type_id: 5 },
        { id: 36, name: "A210", capacity: 1, storey: 2, x: 16, y: -30, rotation: 90, size_x: 9, size_y: 15, size_z: 6, description: "TV", building_id: 1, type_id: 1 },

        { id: 37, name: "A005", capacity: 1, storey: 0, x: 5, y: -85, rotation: 0, size_x: 5, size_y: 9, size_z: 6, description: "9-bol 2 ha mukodik", building_id: 1, type_id: 26 },
        { id: 38, name: "A103", capacity: 1, storey: 1, x: 5, y: -85, rotation: 0, size_x: 5, size_y: 9, size_z: 6, description: "kanapekkal otthonos", building_id: 1, type_id: 26 },
        { id: 39, name: "A026", capacity: 1, storey: 0, x: 3, y: 6, rotation: 270, size_x: 6, size_y: 11, size_z: 6, description: "event", building_id: 1, type_id: 29 },
        { id: 40, name: "A024", capacity: 1, storey: 0, x: 3, y: 15, rotation: 270, size_x: 10, size_y: 11, size_z: 6, description: "női wc", building_id: 1, type_id: 28 },

        { id: 41, name: "A215", capacity: 1, storey: 2, x: 21, y: 3, rotation: 90, size_x: 21, size_y: 15, size_z: 6, description: "ez is valami terem", building_id: 1, type_id: 1 },
        { id: 42, name: "A216", capacity: 1, storey: 2, x: 21, y: 25, rotation: 90, size_x: 21, size_y: 15, size_z: 6, description: "osszetolt asztalok hu de jo", building_id: 1, type_id: 1 },
        { id: 43, name: "A217", capacity: 1, storey: 2, x: 12, y: 48, rotation: 180, size_x: 18, size_y: 15, size_z: 6, description: "terem", building_id: 1, type_id: 1 },
        { id: 44, name: "A218", capacity: 1, storey: 2, x: 29, y: 48, rotation: 180, size_x: 14, size_y: 15, size_z: 6, description: "matek", building_id: 1, type_id: 1 },
        { id: 45, name: "A219", capacity: 1, storey: 2, x: 40, y: 48, rotation: 180, size_x: 6, size_y: 15, size_z: 6, description: "szabi", building_id: 1, type_id: 5 },
        { id: 46, name: "A220", capacity: 1, storey: 2, x: 58, y: 53, rotation: 90, size_x: 15, size_y: 19, size_z: 6, description: "csutak terem", building_id: 1, type_id: 1 },
        { id: 47, name: "A222", capacity: 1, storey: 2, x: 58, y: 39, rotation: 90, size_x: 11, size_y: 19, size_z: 6, description: "projekt munka", building_id: 1, type_id: 4 },

        { id: 48, name: "A008", capacity: 1, storey: 0, x: 16, y: -66, rotation: 90, size_x: 5, size_y: 15, size_z: 6, description: "elo fognak kesziteni", building_id: 1, type_id: 6 },
        { id: 49, name: "A114", capacity: 1, storey: 1, x: -1, y: -15, rotation: 270, size_x: 5, size_y: 9, size_z: 6, description: "itt lehet dohanyozni", building_id: 1, type_id: 34 },

        { id: 51, name: "A213", capacity: 1, storey: 2, x: 0, y: -20, rotation: 270, size_x: 5, size_y: 8, size_z: 6, description: "tanarok szobaja", building_id: 1, type_id: 5 },
        { id: 52, name: "A115", capacity: 1, storey: 1, x: -1, y: -21, rotation: 270, size_x: 5, size_y: 9, size_z: 6, description: "Toth Eva tanari", building_id: 1, type_id: 5 },
        { id: 53, name: "A224", capacity: 1, storey: 2, x: 4, y: 7, rotation: 270, size_x: 10, size_y: 8, size_z: 6, description: "vecelini", building_id: 1, type_id: 28 },
        { id: 54, name: "A225", capacity: 1, storey: 2, x: 4, y: -1, rotation: 270, size_x: 4, size_y: 8, size_z: 6, description: "vecelini 2", building_id: 1, type_id: 33 },
        { id: 55, name: "A226", capacity: 1, storey: 2, x: 4, y: -6, rotation: 270, size_x: 4, size_y: 8, size_z: 6, description: "event", building_id: 1, type_id: 29 },

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
    ]

    return classrooms
}