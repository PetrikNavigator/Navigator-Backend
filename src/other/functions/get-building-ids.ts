import { buildingsModel } from "generated/prisma/models";

export function getBuildingIds(buildings: buildingsModel[]): bigint[] {
    return buildings.map(x => x.id)
}