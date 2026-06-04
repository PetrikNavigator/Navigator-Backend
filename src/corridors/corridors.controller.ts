import { Controller, Get, Post, Body, Param, Delete, Put, Query, Req, UseGuards } from '@nestjs/common';
import { CorridorsService } from './corridors.service';
import { CreateCorridorDto } from './dto/create-corridor.dto';
import { UpdateCorridorDto } from './dto/update-corridor.dto';
import { ParseBigIntPipe } from 'src/other/pipes/ParseBigIntPipe';
import type { AuthenticatedRequest } from 'src/other/types/admin-types';
import { AuthGuard } from 'src/users/auth/auth.guard';
import {
  ApiAddCorridor,
  ApiCorridorsController,
  ApiGetCorridors,
  ApiModifyCorridor,
  ApiRemoveCorridor,
} from 'src/other/decorators/documentation/corridors.decorators';

@ApiCorridorsController()
@Controller('api/corridors')
@UseGuards(AuthGuard)
export class CorridorsController {
  constructor(private readonly corridorsService: CorridorsService) { }

  @Get()
  @ApiGetCorridors()
  getCorridors(  ) {
    return this.corridorsService.getCorridors()
  }

  @Post()
  @ApiAddCorridor()
  addCorridor(
    @Body() body: CreateCorridorDto
  ) {
    return this.corridorsService.addCorridor(body)
  }

  @Put(":id")
  @ApiModifyCorridor()
  modifyCorridor(
    @Body() body: UpdateCorridorDto,
    @Param("id", ParseBigIntPipe) classroom_id: bigint
  ) {
    return this.corridorsService.modifyCorridor(body, classroom_id)
  }

  @Delete(":id")
  @ApiRemoveCorridor()
  removeCorridor(
    @Param("id", ParseBigIntPipe) classroom_id: bigint
  ) {
    return this.corridorsService.removeCorridor(classroom_id)
  }
}
