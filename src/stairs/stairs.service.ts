import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStairDto } from './dto/create-stair.dto';
import { UpdateStairDto } from './dto/update-stair.dto';
import { PrismaService } from 'src/other/prisma/prisma.service';
import { BuildingsService } from '../buildings/buildings.service';
import { ensureUniqueNameInBuilding } from 'src/other/functions/ensure-unique-name';
import { getBuildingIds } from 'src/other/functions/get-building-ids';

@Injectable()
export class StairsService {
    constructor(
        private readonly prisma: PrismaService,
    ) { }

    async getStairs() {
        return await this.prisma.stairs.findMany()
    }

    async addStairs(body: CreateStairDto) {
        await ensureUniqueNameInBuilding(
            this.prisma,
            'stairs',
            body.name,
            body.building_id,
            { message: "A stair with this name already exists in this building!" }
        )

        return await this.prisma.stairs.create({
            data: body
        })
    }

    async modifyStairs(
        stair_id: bigint,
        body: UpdateStairDto
    ) {
        const stair = await this.verifyStairs(stair_id)

        if (body.name !== undefined || body.building_id !== undefined)
            await ensureUniqueNameInBuilding(
                this.prisma,
                'stairs',
                body.name ?? stair.name,
                body.building_id ?? stair.building_id,
                { excludeId: stair_id, message: "A stair with this name already exists in this building!" }
            )

        return await this.prisma.stairs.update({
            where: {
                id: stair_id
            },
            data: body
        })
    }

    async removeStairs(stair_id: bigint) {
        await this.verifyStairs(stair_id)

        return await this.prisma.stairs.delete({
            where: {
                id: stair_id
            }
        })
    }

    private async verifyStairs(stair_id: bigint) {
        const stair = await this.prisma.stairs.findFirst({
            where: { id: stair_id }
        })

        if (!stair)
            throw new NotFoundException("Stair not found!")

        return stair
    }
}
