import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from 'generated/prisma/client';
import { PrismaService } from 'src/other/prisma/prisma.service';
import { CreateClassroomDto } from './dto/create-classroom.dto';
import { UpdateClassroomDto } from './dto/update-classroom.dto';
import { ensureUniqueNameInBuilding } from 'src/other/functions/ensure-unique-name';

@Injectable()
export class ClassroomsService {
    constructor(
        private readonly prisma: PrismaService,
    ) { }

    async getClassrooms(): Promise<Prisma.classroomsCreateManyInput[]> {
        return await this.prisma.classrooms.findMany({
            orderBy: { name: "asc" }
        })
    }

    async addClassrooms(
        body: CreateClassroomDto
    ) {
        await ensureUniqueNameInBuilding(
            this.prisma,
            'classrooms',
            body.name,
            body.building_id,
            { message: "A classroom with this name already exists in this building!" }
        )

        return await this.prisma.classrooms.create({
            data: body
        })
    }

    async modifyClassrooms(
        body: UpdateClassroomDto,
        classroom_id: bigint
    ): Promise<Prisma.classroomsUpdateInput> {
        const classroom = await this.verifyClassroom(classroom_id)

        if (body.name !== undefined || body.building_id !== undefined) {
            await ensureUniqueNameInBuilding(
                this.prisma,
                'classrooms',
                body.name ?? classroom.name,
                body.building_id ?? classroom.building_id,
                { excludeId: classroom_id, message: "A classroom with this name already exists in this building!" }
            )
        }

        return await this.prisma.classrooms.update({
            where: {
                id: classroom_id
            },
            data: body
        })
    }

    async removeClassrooms(
        classroom_id: bigint
    ): Promise<Prisma.classroomsCreateManyInput> {
        await this.verifyClassroom(classroom_id)

        return await this.prisma.classrooms.delete({
            where: {
                id: classroom_id
            }
        })
    }

    private async verifyClassroom(
        classroom_id: bigint
    ) {
        const classroom = await this.prisma.classrooms.findFirst({
            where: {
                id: classroom_id
            }
        })

        if (!classroom)
            throw new NotFoundException("Classroom not found!")

        return classroom
    }
}
