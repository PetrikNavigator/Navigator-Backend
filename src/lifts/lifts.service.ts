import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLiftDto } from './dto/create-lift.dto';
import { UpdateLiftDto } from './dto/update-lift.dto';
import { PrismaService } from 'src/other/prisma/prisma.service';
import { ensureUniqueNameInBuilding } from 'src/other/functions/ensure-unique-name';
import { liftsModel } from 'generated/prisma/models';

@Injectable()
export class LiftsService {
    constructor(
        private readonly prisma: PrismaService,
    ) { }

    async getLifts(): Promise<liftsModel[]> {
        return this.prisma.lifts.findMany()
    }

    async addLifts(body: CreateLiftDto) {
        await ensureUniqueNameInBuilding(
            this.prisma,
            'lifts',
            body.name,
            body.building_id,
            { message: "A lift with this name already exists in this building!" }
        )

        return await this.prisma.lifts.create({
            data: body
        })
    }

    async modifyLifts(lift_id: bigint, body: UpdateLiftDto) {
        const lift = await this.validateLiftAccess(lift_id)

        if (body.name || body.building_id)
            await ensureUniqueNameInBuilding(
                this.prisma,
                'lifts',
                body.name ?? lift.name,
                body.building_id ?? lift.building_id,
                { excludeId: lift_id, message: "A lift with this name already exists in this building!" }
            )

        return await this.prisma.lifts.update({
            where: {
                id: lift_id
            },
            data: body
        })
    }

    async removeLifts(lift_id: bigint) {
        await this.validateLiftAccess(lift_id)

        return await this.prisma.lifts.delete({
            where: { id: lift_id }
        })
    }

    private async validateLiftAccess(lift_id: bigint) {
        const lift = await this.prisma.lifts.findFirst({
            where: { id: lift_id }
        })

        if (!lift)
            throw new NotFoundException("Lift not found!")

        return lift
    }
}
