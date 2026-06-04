import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query, Req, UseGuards } from '@nestjs/common';
import { StairsService } from './stairs.service';
import { CreateStairDto } from './dto/create-stair.dto';
import { UpdateStairDto } from './dto/update-stair.dto';
import type { AuthenticatedRequest } from 'src/other/types/admin-types';
import { ParseBigIntPipe } from 'src/other/pipes/ParseBigIntPipe';
import {
  ApiAddStair,
  ApiGetStairs,
  ApiModifyStair,
  ApiRemoveStair,
  ApiStairsController,
} from 'src/other/decorators/documentation/stairs.decorators';
import { AuthGuard } from 'src/users/auth/auth.guard';

@ApiStairsController()
@Controller('api/stairs')
@UseGuards(AuthGuard)
export class StairsController {
  constructor(private readonly stairsService: StairsService) { }

  @Get()
  @ApiGetStairs()
  getStairs() {
    return this.stairsService.getStairs()
  }

  @Post()
  @ApiAddStair()
  addStairs(
    @Body() body: CreateStairDto
  ) {
    return this.stairsService.addStairs(body)
  }

  @Put(":id")
  @ApiModifyStair()
  modifyStairs(
    @Body() body: UpdateStairDto,
    @Param("id", ParseBigIntPipe) lift_id: bigint
  ) {
    return this.stairsService.modifyStairs(lift_id, body)
  }

  @Delete(":id")
  @ApiRemoveStair()
  removeStairs(
    @Param("id", ParseBigIntPipe) lift_id: bigint
  ) {
    return this.stairsService.removeStairs(lift_id)
  }
}
