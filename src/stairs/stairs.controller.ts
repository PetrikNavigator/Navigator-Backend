import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { StairsService } from './stairs.service';
import { CreateStairDto } from './dto/create-stair.dto';
import { UpdateStairDto } from './dto/update-stair.dto';
import { ParseBigIntPipe } from 'src/other/pipes/ParseBigIntPipe';
import { AuthGuard } from 'src/users/auth/auth.guard';

@Controller('api/stairs')
@UseGuards(AuthGuard)
export class StairsController {
  constructor(private readonly stairsService: StairsService) { }

  @Get()
  getStairs() {
    return this.stairsService.getStairs()
  }

  @Post()
  addStairs(
    @Body() body: CreateStairDto
  ) {
    return this.stairsService.addStairs(body)
  }

  @Put(":id")
  modifyStairs(
    @Body() body: UpdateStairDto,
    @Param("id", ParseBigIntPipe) lift_id: bigint
  ) {
    return this.stairsService.modifyStairs(lift_id, body)
  }

  @Delete(":id")
  removeStairs(
    @Param("id", ParseBigIntPipe) lift_id: bigint
  ) {
    return this.stairsService.removeStairs(lift_id)
  }
}
