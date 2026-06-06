import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { CorridorsService } from './corridors.service';
import { CreateCorridorDto } from './dto/create-corridor.dto';
import { UpdateCorridorDto } from './dto/update-corridor.dto';
import { ParseBigIntPipe } from 'src/other/pipes/ParseBigIntPipe';
import { AuthGuard } from 'src/users/auth/auth.guard';

@Controller('api/corridors')
@UseGuards(AuthGuard)
export class CorridorsController {
  constructor(private readonly corridorsService: CorridorsService) { }

  @Get()
  getCorridors(  ) {
    return this.corridorsService.getCorridors()
  }

  @Post()
  addCorridor(
    @Body() body: CreateCorridorDto
  ) {
    return this.corridorsService.addCorridor(body)
  }

  @Put(":id")
  modifyCorridor(
    @Body() body: UpdateCorridorDto,
    @Param("id", ParseBigIntPipe) classroom_id: bigint
  ) {
    return this.corridorsService.modifyCorridor(body, classroom_id)
  }

  @Delete(":id")
  removeCorridor(
    @Param("id", ParseBigIntPipe) classroom_id: bigint
  ) {
    return this.corridorsService.removeCorridor(classroom_id)
  }
}
