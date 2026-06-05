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

        // B foldszint
        
        { id: 56, name: "B003", capacity: 1, storey: 0, x: 0, y: 0, rotation: 180, size_x: 10, size_y: 15, size_z: 6, description: "az kapu zarva van", building_id: 2, type_id: 30 },
        { id: 57, name: "B005", capacity: 1, storey: 0, x: -12, y: 0, rotation: 180, size_x: 11, size_y: 15, size_z: 6, description: "vegyel itt valamit", building_id: 2, type_id: 35 },
        { id: 58, name: "B006", capacity: 1, storey: 0, x: -26, y: 0, rotation: 180, size_x: 14, size_y: 15, size_z: 6, description: "dok centrum, kedvesek", building_id: 2, type_id: 36 },
        { id: 59, name: "B007", capacity: 1, storey: 0, x: -37, y: 0, rotation: 180, size_x: 5, size_y: 15, size_z: 6, description: "Penksza", building_id: 2, type_id: 27 },
        { id: 60, name: "B008", capacity: 1, storey: 0, x: -44, y: 0, rotation: 180, size_x: 6, size_y: 15, size_z: 6, description: "neha ide is jonni kell", building_id: 2, type_id: 37 },

        { id: 61, name: "B013", capacity: 1, storey: 0, x: -1, y: -52, rotation: 0, size_x: 33, size_y: 17, size_z: 8, description: "oriasi labor", building_id: 2, type_id: 3 },
        { id: 62, name: "B014", capacity: 1, storey: 0, x: -28, y: -49, rotation: 0, size_x: 19, size_y: 23, size_z: 6, description: "meg egy labor", building_id: 2, type_id: 3 },
        { id: 63, name: "B017", capacity: 1, storey: 0, x: -47, y: -37, rotation: 270, size_x: 21, size_y: 16, size_z: 6, description: "ujabb labor ize", building_id: 2, type_id: 3 },

        { id: 64, name: "B029", capacity: 1, storey: 0, x: -9, y: -37, rotation: 0, size_x: 7, size_y: 8, size_z: 6, description: "jobb mint az A epuletben", building_id: 2, type_id: 26 },
        { id: 65, name: "B032", capacity: 1, storey: 0, x: -9, y: -29, rotation: 0, size_x: 7, size_y: 6, size_z: 6, description: "vece", building_id: 2, type_id: 28 },
        { id: 66, name: "B033", capacity: 1, storey: 0, x: -1, y: -33, rotation: 0, size_x: 7, size_y: 14, size_z: 6, description: "event", building_id: 2, type_id: 29 },
        { id: 67, name: "B035", capacity: 1, storey: 0, x: 7, y: -33, rotation: 0, size_x: 7, size_y: 14, size_z: 6, description: "sose lattam", building_id: 2, type_id: 38 },

        { id: 68, name: "B041", capacity: 1, storey: 0, x: 22, y: 0, rotation: 180, size_x: 17, size_y: 15, size_z: 6, description: "terem", building_id: 2, type_id: 5 },
        { id: 69, name: "B043", capacity: 1, storey: 0, x: 28, y: -58, rotation: 0, size_x: 7, size_y: 14, size_z: 6, description: "ilyen is van ezek szerint", building_id: 2, type_id: 8 },

        { id: 70, name: "B044/A", capacity: 1, storey: 0, x: 37, y: -54, rotation: 0, size_x: 9, size_y: 6, size_z: 6, description: "konyvtaros terem", building_id: 2, type_id: 39 },
        { id: 71, name: "B044/B", capacity: 1, storey: 0, x: 20, y: -58, rotation: 0, size_x: 7, size_y: 14, size_z: 6, description: "dok", building_id: 2, type_id: 1 },

        { id: 72, name: "B045", capacity: 1, storey: 0, x: 29, y: -33, rotation: 0, size_x: 25, size_y: 12, size_z: 6, description: "lehet kolcsonozni", building_id: 2, type_id: 25 },
        { id: 73, name: "B048", capacity: 1, storey: 0, x: 29, y: -43, rotation: 180, size_x: 5, size_y: 7, size_z: 6, description: "valahol oltozni is kell", building_id: 2, type_id: 10 },
        { id: 74, name: "B051", capacity: 1, storey: 0, x: 37, y: -61, rotation: 0, size_x: 9, size_y: 7, size_z: 6, description: "itt talalhato a pszicholohus", building_id: 2, type_id: 41 },
    ]

    return classrooms
}