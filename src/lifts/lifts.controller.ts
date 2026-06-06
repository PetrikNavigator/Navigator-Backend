import { Controller, Get, Post, Body, Param, Delete, UseGuards, Put } from '@nestjs/common';
import { LiftsService } from './lifts.service';
import { CreateLiftDto } from './dto/create-lift.dto';
import { UpdateLiftDto } from './dto/update-lift.dto';
import { AuthGuard } from 'src/users/auth/auth.guard';
import { ParseBigIntPipe } from 'src/other/pipes/ParseBigIntPipe';

@Controller('api/lifts')
@UseGuards(AuthGuard)
export class LiftsController {
  constructor(private readonly liftsService: LiftsService) { }

  @Get()
  getLifts() {
    return this.liftsService.getLifts()
  }

  @Post()
  addLifts(
    @Body() body: CreateLiftDto
  ) {
    return this.liftsService.addLifts(body)
  }

  @Put(":id")
  modifyLifts(
    @Body() body: UpdateLiftDto,
    @Param("id", ParseBigIntPipe) lift_id: bigint
  ) {
    return this.liftsService.modifyLifts(lift_id, body)
  }

  @Delete(":id")
  removeLifts(
    @Param("id", ParseBigIntPipe) lift_id: bigint
  ) {
    return this.liftsService.removeLifts(lift_id)
  }
}
