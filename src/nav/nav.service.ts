import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/other/prisma/prisma.service';
import { BuildingsService } from '../buildings/buildings.service';
import { ClassroomsService } from '../classrooms/classrooms.service';
import { CorridorsService } from '../corridors/corridors.service';
import { LiftsService } from '../lifts/lifts.service';
import { StairsService } from '../stairs/stairs.service';

@Injectable()
export class NavService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly buildingsService: BuildingsService,
    private readonly classroomsService: ClassroomsService,
    private readonly stairsService: StairsService,
    private readonly liftsService: LiftsService,
    private readonly corridorsService: CorridorsService
  ) { }

  async full_graph() {
    const [
      buildings, classrooms, classroom_types, lifts, stairs, corridors
    ] = await Promise.all(
      [
        this.buildingsService.getBuildings(),
        this.classroomsService.getClassrooms(),
        this.prisma.classroom_types.findMany({
          orderBy: { name: "asc" }
        }),
        this.liftsService.getLifts(),
        this.stairsService.getStairs(),
        this.corridorsService.getCorridors()
      ]
    )

    const full_graph = {
      buildings,
      classrooms,
      classroom_types,
      lifts,
      stairs,
      corridors
    }

    return full_graph
  }
}