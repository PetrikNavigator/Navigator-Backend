import { Controller, Get, Post, Body, Param, Delete, UseGuards, Req, Query, Put } from '@nestjs/common';
import { LiftsService } from './lifts.service';
import { CreateLiftDto } from './dto/create-lift.dto';
import { UpdateLiftDto } from './dto/update-lift.dto';
import { AuthGuard } from 'src/users/auth/auth.guard';
import { ParseBigIntPipe } from 'src/other/pipes/ParseBigIntPipe';
import {
  ApiAddLift,
  ApiGetLifts,
  ApiLiftsController,
  ApiModifyLift,
  ApiRemoveLift,
} from 'src/other/decorators/documentation/lifts.decorators';

@ApiLiftsController()
@Controller('api/lifts')
@UseGuards(AuthGuard)
export class LiftsController {
  constructor(private readonly liftsService: LiftsService) { }

  @Get()
  @ApiGetLifts()
  getLifts() {
    return this.liftsService.getLifts()
  }

  @Post()
  @ApiAddLift()
  addLifts(
    @Body() body: CreateLiftDto
  ) {
    return this.liftsService.addLifts(body)
  }

  @Put(":id")
  @ApiModifyLift()
  modifyLifts(
    @Body() body: UpdateLiftDto,
    @Param("id", ParseBigIntPipe) lift_id: bigint
  ) {
    return this.liftsService.modifyLifts(lift_id, body)
  }

  @Delete(":id")
  @ApiRemoveLift()
  removeLifts(
    @Param("id", ParseBigIntPipe) lift_id: bigint
  ) {
    return this.liftsService.removeLifts(lift_id)
  }
}
