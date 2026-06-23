import { TranslationCollector } from "./TranslationCollector";

/** [codename, hungarian, english] */
type UiRow = [string, string, string]

/**
 * Every static frontend string, keyed by codename. The frontend resolves these
 * through i18next; placeholders such as {{name}} are interpolated client-side.
 */
const UI_ROWS: UiRow[] = [
    // ---- Common / shared --------------------------------------------------
    ["ui.common.name", "Név", "Name"],
    ["ui.common.description", "Leírás", "Description"],
    ["ui.common.building", "Épület", "Building"],
    ["ui.common.color", "Szín", "Color"],
    ["ui.common.edit", "Szerk.", "Edit"],
    ["ui.common.delete", "Törlés", "Delete"],
    ["ui.common.save", "Mentés", "Save"],
    ["ui.common.create", "Létrehozás", "Create"],
    ["ui.common.cancel", "Mégse", "Cancel"],
    ["ui.common.all", "Összes", "All"],
    ["ui.common.floor", "Emelet", "Floor"],
    ["ui.common.storey_filter", "Szint", "Floor"],
    ["ui.common.yes", "Igen", "Yes"],
    ["ui.common.no", "Nem", "No"],
    ["ui.common.choose", "Válassz", "Choose"],
    ["ui.common.unknown", "ismeretlen", "unknown"],
    ["ui.common.unknown_type", "Ismeretlen típus", "Unknown type"],
    ["ui.common.loading", "Betöltés...", "Loading..."],
    ["ui.common.no_results", "Nincs találat.", "No results."],
    ["ui.common.search_placeholder", "Keresés...", "Search..."],
    ["ui.common.more", "Több", "More"],
    ["ui.common.less", "Kevesebb", "Less"],
    ["ui.common.x", "X", "X"],
    ["ui.common.y", "Y", "Y"],
    ["ui.common.pos_x", "Pozíció X", "Position X"],
    ["ui.common.pos_y", "Pozíció Y", "Position Y"],
    ["ui.common.pos_x_m", "Pozíció X (m)", "Position X (m)"],
    ["ui.common.pos_y_m", "Pozíció Y (m)", "Position Y (m)"],
    ["ui.common.rotation", "Forgatás", "Rotation"],
    ["ui.common.min_storey", "Minimum emelet", "Minimum floor"],
    ["ui.common.max_storey", "Maximum emelet", "Maximum floor"],
    ["ui.common.min_storey_short", "Min. emelet", "Min. floor"],
    ["ui.common.max_storey_short", "Max. emelet", "Max. floor"],
    ["ui.common.negative_allowed", "Negatív érték is megadható", "Negative values allowed"],
    ["ui.common.meters", "Méterben megadva", "In meters"],
    ["ui.common.preview_3d", "3D előnézet", "3D preview"],
    ["ui.common.err_position_number", "A pozíciónak érvényes számnak kell lennie", "The position must be a valid number"],
    ["ui.common.err_min_max", "A minimum emelet nem lehet nagyobb a maximumnál", "The minimum floor cannot be greater than the maximum"],
    ["ui.confirm.delete", "Biztos hogy törölöd a(z) {{name}}?", "Are you sure you want to delete {{name}}?"],

    // ---- Floor labels -----------------------------------------------------
    ["ui.floor.ground", "Földszint", "Ground floor"],
    ["ui.floor.basement", "{{n}}. alagsor", "Basement {{n}}"],
    ["ui.floor.upper", "{{n}}. emelet", "Floor {{n}}"],

    // ---- App / login ------------------------------------------------------
    ["ui.app.title", "Petrik App", "Petrik App"],
    ["ui.login.title", "Jelentkezz be!", "Sign in!"],
    ["ui.login.email", "Email", "Email"],
    ["ui.login.password", "Jelszó", "Password"],
    ["ui.login.submit", "Bejelentkezés", "Log in"],

    // ---- Settings ---------------------------------------------------------
    ["ui.settings.title", "Beállítások", "Settings"],
    ["ui.settings.no_building", "Nincs épület kiválasztva!", "No building selected!"],
    ["ui.settings.storey", "Emelet ({{min}}–{{max}})", "Floor ({{min}}–{{max}})"],
    ["ui.settings.saved", "Sikeres mentés.", "Saved successfully."],

    // ---- Kiosk ------------------------------------------------------------
    ["ui.kiosk.navbar_title", "Petrik Navigátor", "Petrik Navigator"],
    ["ui.kiosk.clear_highlight", "Kiemelés törlése", "Clear highlight"],
    ["ui.kiosk.reset", "Visszaállítás", "Reset"],
    ["ui.kiosk.loading", "Adatok betöltése…", "Loading data…"],
    ["ui.kiosk.error", "Hiba: {{error}}", "Error: {{error}}"],

    // ---- Search / navigate ------------------------------------------------
    ["ui.search.placeholder", "Terem keresése", "Search for a room"],
    ["ui.navigate.title", "Útvonal", "Route"],
    ["ui.navigate.back", "← Vissza", "← Back"],
    ["ui.navigate.my_position", "Saját Pozíció", "My position"],
    ["ui.navigate.choose_room", "Válassz termet", "Choose a room"],
    ["ui.navigate.start", "Kiindulás:", "Start:"],
    ["ui.navigate.destination", "Cél:", "Destination:"],
    ["ui.navigate.barrier_free", "Akadálymentes (liftek)", "Accessible (lifts)"],
    ["ui.navigate.needs_start", "Válassz kiindulási pontot az útvonalhoz.", "Choose a starting point for the route."],
    ["ui.navigate.no_route", "Nem található útvonal a két pont között.", "No route found between the two points."],
    ["ui.highlighter.title", "Terem kiemelés (típus)", "Room highlight (type)"],
    ["ui.card.navigate", "Navigálás →", "Navigate →"],

    // ---- Manager sidebar / stats -----------------------------------------
    ["ui.sidebar.overview", "Áttekintés", "Overview"],
    ["ui.sidebar.buildings", "Épületek", "Buildings"],
    ["ui.sidebar.classroom_types", "Terem típusok", "Classroom types"],
    ["ui.sidebar.classrooms", "Termek", "Classrooms"],
    ["ui.sidebar.lifts", "Liftek", "Lifts"],
    ["ui.sidebar.stairs", "Lépcsők", "Stairs"],
    ["ui.sidebar.corridors", "Folyosók", "Corridors"],
    ["ui.sidebar.preview", "3D Előnézet", "3D Preview"],
    ["ui.sidebar.logout", "Kijelentkezés", "Log out"],

    // ---- Building editor --------------------------------------------------
    ["ui.building.add", "Épület hozzáadása", "Add building"],
    ["ui.building.empty", "Nincs még épület. Adj hozzá egyet a jobb felső gombbal.", "No buildings yet. Add one with the button in the top right."],
    ["ui.building.edit_title", "Épület szerkesztése", "Edit building"],
    ["ui.building.new_title", "Új épület", "New building"],
    ["ui.building.err_name", "Add meg az épület nevét", "Enter the building name"],
    ["ui.building.err_desc", "Add meg az épület leírását", "Enter the building description"],
    ["ui.building.new_placeholder", "új épület", "new building"],
    ["ui.building.preview_hint", "A szerkesztett épület termei narancssárgával kiemelve. A kék korongot húzva az épület pozíciója a 3D nézetben is állítható.", "The rooms of the edited building are highlighted in orange. Drag the blue disc to adjust the building's position in the 3D view."],

    // ---- Classroom type editor -------------------------------------------
    ["ui.type.add", "Típus hozzáadása", "Add type"],
    ["ui.type.empty", "Nincs még típus. Adj hozzá egyet a jobb felső gombbal.", "No types yet. Add one with the button in the top right."],
    ["ui.type.edit_title", "Típus szerkesztése", "Edit type"],
    ["ui.type.new_title", "Új típus", "New type"],
    ["ui.type.err_name", "Add meg a típus nevét", "Enter the type name"],

    // ---- Classroom editor -------------------------------------------------
    ["ui.classroom.add", "Terem hozzáadása", "Add classroom"],
    ["ui.classroom.empty", "Nincs még terem. Adj hozzá egyet a jobb felső gombbal.", "No classrooms yet. Add one with the button in the top right."],
    ["ui.classroom.name_placeholder", "Pl. A205", "e.g. A205"],
    ["ui.classroom.desc_placeholder", "Rövid leírás a teremről...", "Short description of the room..."],
    ["ui.classroom.type", "Terem típusa", "Classroom type"],
    ["ui.classroom.capacity", "Befogadóképesség", "Capacity"],
    ["ui.classroom.new_placeholder", "új terem", "new classroom"],
    ["ui.classroom.err_name", "Add meg az épület nevét", "Enter the classroom name"],
    ["ui.classroom.err_desc", "Add meg az épület leírását", "Enter the classroom description"],
    ["ui.classroom.size_x", "Szélesség (X)", "Width (X)"],
    ["ui.classroom.size_y", "Mélység (Y)", "Depth (Y)"],
    ["ui.classroom.size_z", "Belmagasság (Z)", "Height (Z)"],
    ["ui.classroom.size_z_max", "Maximum {{n}} méter", "Maximum {{n}} meters"],

    // ---- Corridor editor --------------------------------------------------
    ["ui.corridor.add", "Folyosó hozzáadása", "Add corridor"],
    ["ui.corridor.empty", "Nincs még folyosó. Adj hozzá egyet a jobb felső gombbal.", "No corridors yet. Add one with the button in the top right."],
    ["ui.corridor.name_placeholder", "Pl. 2. emeleti folyosó", "e.g. 2nd floor corridor"],
    ["ui.corridor.err_name", "Add meg a folyosó nevét", "Enter the corridor name"],
    ["ui.corridor.err_positions", "A pozícióknak érvényes számoknak kell lenniük", "The positions must be valid numbers"],
    ["ui.corridor.err_same_point", "A kezdő- és végpont nem lehet ugyanaz", "The start and end points cannot be the same"],
    ["ui.corridor.err_width", "A szélességnek pozitívnak kell lennie", "The width must be positive"],
    ["ui.corridor.new_placeholder", "új folyosó", "new corridor"],
    ["ui.corridor.start_x", "Kezdőpont X", "Start point X"],
    ["ui.corridor.start_y", "Kezdőpont Y", "Start point Y"],
    ["ui.corridor.end_x", "Végpont X", "End point X"],
    ["ui.corridor.end_y", "Végpont Y", "End point Y"],
    ["ui.corridor.width", "Szélesség", "Width"],
    ["ui.corridor.barrier_free", "Akadálymentes", "Accessible"],
    ["ui.corridor.outdoor", "Kültéri", "Outdoor"],
    ["ui.corridor.barrier_free_short", "Akadálym.", "Accessible"],
    ["ui.corridor.outdoor_short", "Kültéri", "Outdoor"],

    // ---- Lift editor ------------------------------------------------------
    ["ui.lift.add", "Lift hozzáadása", "Add lift"],
    ["ui.lift.empty", "Nincs még lift. Adj hozzá egyet a jobb felső gombbal.", "No lifts yet. Add one with the button in the top right."],
    ["ui.lift.name_placeholder", "Pl. A1 lift", "e.g. A1 lift"],
    ["ui.lift.err_name", "Add meg a lift nevét", "Enter the lift name"],
    ["ui.lift.new_placeholder", "új lift", "new lift"],
    ["ui.lift.max_hint", "A lift legfelső megállója", "The lift's topmost stop"],

    // ---- Stair editor -----------------------------------------------------
    ["ui.stair.add", "Lépcső hozzáadása", "Add stairs"],
    ["ui.stair.empty", "Nincs még lépcső. Adj hozzá egyet a jobb felső gombbal.", "No stairs yet. Add one with the button in the top right."],
    ["ui.stair.name_placeholder", "Pl. Főlépcső", "e.g. Main staircase"],
    ["ui.stair.err_name", "Add meg a lépcső nevét", "Enter the stairs name"],
    ["ui.stair.new_placeholder", "új lépcső", "new stairs"],
    ["ui.stair.max_hint", "A lépcső legfelső szintje", "The staircase's topmost level"],

    // ---- API error messages ----------------------------------------------
    ["ui.error.fallback", "Ismeretlen hiba történt. Próbáld újra!", "An unknown error occurred. Please try again!"],
    ["ui.error.network", "A szerver nem elérhető. Ellenőrizd a kapcsolatot!", "The server is unavailable. Check your connection!"],
    ["ui.error.timeout", "Időtúllépés a szerver válaszára várva.", "Timed out waiting for the server response."],
    ["ui.error.unauthorized", "Be kell jelentkezned a művelethez.", "You must log in to perform this action."],
    ["ui.error.forbidden", "Nincs jogosultságod a művelethez.", "You don't have permission for this action."],
    ["ui.error.not_found", "A keresett erőforrás nem található.", "The requested resource was not found."],
    ["ui.error.conflict", "Ütközés: az adat időközben módosulhatott.", "Conflict: the data may have changed in the meantime."],
    ["ui.error.unprocessable", "Hibás adat — ellenőrizd a kitöltést.", "Invalid data — check your input."],
    ["ui.error.server", "Szerverhiba. Próbáld újra később!", "Server error. Please try again later!"],

    // ---- 3D views / misc --------------------------------------------------
    ["ui.common.no_data", "Nincs elérhető adat", "No data available"],
    ["ui.editor.new_generic", "új", "new"],

    // ---- On-screen keyboard ----------------------------------------------
    ["ui.keyboard.aria", "Képernyő-billentyűzet", "On-screen keyboard"],
    ["ui.keyboard.switch_lang", "Nyelv váltása", "Switch language"],
    ["ui.keyboard.close", "Bezárás", "Close"],
    ["ui.keyboard.close_aria", "Billentyűzet bezárása", "Close keyboard"],
    ["ui.keyboard.space", "Szóköz", "Space"],
]

/** Registers every static UI translation on the collector. */
export function SeedUiTranslations(collector: TranslationCollector): void {
    for (const [codename, hu, en] of UI_ROWS) {
        collector.set(codename, hu, en)
    }
}
