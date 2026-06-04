import { Controller, Get, Post, Delete, UseGuards, Put, Req, Param, Body, Query } from '@nestjs/common';
import { BuildingsService } from './buildings.service';
import { AuthGuard } from 'src/users/auth/auth.guard';
import type { AuthenticatedRequest } from 'src/other/types/admin-types';
import { CreateBuildingDto } from './dto/create-building.dto';
import { UpdateBuildingDto } from './dto/update-building.dto';
import { ParseBigIntPipe } from 'src/other/pipes/ParseBigIntPipe';
import {
  ApiAddBuilding,
  ApiBuildingsController,
  ApiGetBuildings,
  ApiModifyBuilding,
  ApiRemoveBuilding,
} from 'src/other/decorators/documentation/buildings.decorators';

@ApiBuildingsController()
@Controller('api/buildings')
@UseGuards(AuthGuard)
export class BuildingsController {
  constructor(private readonly buildingsService: BuildingsService) { }

  @Get()
  @ApiGetBuildings()
  getBuildings(
    @Req() request: AuthenticatedRequest,
  ) {
    return this.buildingsService.getBuildings()
  }

  @Post()
  @ApiAddBuilding()
  addBuildings(
    @Body() body: CreateBuildingDto
  ) {
    return this.buildingsService.addBuildings(body)
  }

  @Put(":id")
  @ApiModifyBuilding()
  modifyBuildings(
    @Param("id", ParseBigIntPipe) building_id: bigint,
    @Body() body: UpdateBuildingDto
  ) {
    return this.buildingsService.modifyBuildings(building_id, body)
  }

  @Delete(":id")
  @ApiRemoveBuilding()
  removeBuildings(
    @Param("id", ParseBigIntPipe) building_id: bigint
  ) {
    return this.buildingsService.removeBuildings(building_id)
  }
}
