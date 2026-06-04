import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateClassroomsTypeDto } from './dto/create-classrooms_type.dto';
import { UpdateClassroomsTypeDto } from './dto/update-classrooms_type.dto';
import { PrismaService } from 'src/other/prisma/prisma.service';

@Injectable()
export class ClassroomsTypesService {
  constructor(
    private readonly prisma: PrismaService,
  ) { }

  async getAll() {
    return await this.prisma.classroom_types.findMany()
  }

  async create(body: CreateClassroomsTypeDto) {
    const already = await this.prisma.classroom_types.findFirst({
      where: { name: body.name }
    })

    if (already)
      throw new ConflictException("A classroom type with this name already exist!")

    return await this.prisma.classroom_types.create({
      data: body
    })
  }

  async update(type_id: bigint, body: UpdateClassroomsTypeDto) {
    await this.verifyType(type_id)

    if (body.name !== undefined) {
      const already = await this.prisma.classroom_types.findFirst({
        where: { name: body.name }
      })

      if (already && type_id !== already.id)
        throw new ConflictException("A classroom type with this name already exist!")
    }

    return await this.prisma.classroom_types.update({
      where: { id: type_id },
      data: body
    })
  }

  async remove(type_id: bigint) {
    await this.verifyType(type_id)

    return await this.prisma.classroom_types.delete({
      where: { id: type_id }
    })
  }

  async verifyType(type_id: bigint) {
    const type = await this.prisma.classroom_types.findFirst({
      where: {
        id: type_id
      }
    })

    if (!type)
      throw new NotFoundException("Type not found!")

    return type
  }
}
