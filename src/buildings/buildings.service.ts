import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/other/prisma/prisma.service';
import { CreateBuildingDto } from './dto/create-building.dto';
import { UpdateBuildingDto } from './dto/update-building.dto';
import { AdminsService } from 'src/users/admins/admins.service';
import { buildingsModel } from 'generated/prisma/models';

@Injectable()
export class BuildingsService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly adminsService: AdminsService
    ) { }

    async getBuildings(
    ): Promise<buildingsModel[]> {
        return await this.prisma.buildings.findMany()
    }

    async addBuildings(
        body: CreateBuildingDto
    ): Promise<buildingsModel> {
        const already = await this.prisma.buildings.findFirst({
            where: { name: body.name }
        })

        if (already)
            throw new ConflictException("Building with this name already exist!")

        return await this.prisma.buildings.create({
            data: body
        })
    }

    async modifyBuildings(
        building_id: bigint,
        body: UpdateBuildingDto
    ): Promise<buildingsModel> {
        return await this.prisma.buildings.update({
            where: {
                id: building_id
            },
            data: body
        })
    }

    async removeBuildings(
        building_id: bigint
    ): Promise<buildingsModel> {
        return await this.prisma.buildings.delete({
            where: {
                id: building_id
            }
        })
    }
}
