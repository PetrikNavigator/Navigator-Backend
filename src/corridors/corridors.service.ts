import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCorridorDto } from './dto/create-corridor.dto';
import { UpdateCorridorDto } from './dto/update-corridor.dto';
import { PrismaService } from 'src/other/prisma/prisma.service';
import { ensureUniqueNameInBuilding } from 'src/other/functions/ensure-unique-name';

@Injectable()
export class CorridorsService {
  constructor(
    private readonly prisma: PrismaService,
  ) { }

  async getCorridors() {
    return await this.prisma.corridors.findMany()
  }

  async addCorridor(
    body: CreateCorridorDto
  ) {
    await ensureUniqueNameInBuilding(
      this.prisma,
      'corridors',
      body.name,
      body.building_id,
      { message: "A corridor with this name already exists in this building!" }
    )

    return await this.prisma.corridors.create({ data: body })
  }

  async modifyCorridor(
    body: UpdateCorridorDto,
    corridor_id: bigint
  ) {
    const corridor = await this.validateCorridor(corridor_id)

    if (body.name !== undefined || body.building_id !== undefined) {
      await ensureUniqueNameInBuilding(
        this.prisma,
        'corridors',
        body.name ?? corridor.name,
        body.building_id ?? corridor.building_id,
        { excludeId: corridor_id, message: "A corridor with this name already exists in this building!" }
      )
    }

    return await this.prisma.corridors.update({
      where: {
        id: corridor_id
      },
      data: body
    })
  }

  async removeCorridor(corridor_id: bigint) {
    await this.validateCorridor(corridor_id)

    return await this.prisma.corridors.delete({
      where: {
        id: corridor_id
      }
    })
  }

  private async validateCorridor(
    corridor_id: bigint
  ) {
    const corridor = await this.prisma.corridors.findFirst({ where: { id: corridor_id } })

    if (!corridor)
      throw new NotFoundException("Corridor not found!")

    return corridor
  }
}
