import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards, Query } from '@nestjs/common';
import { ClassroomsTypesService } from './classrooms_types.service';
import { CreateClassroomsTypeDto } from './dto/create-classrooms_type.dto';
import { UpdateClassroomsTypeDto } from './dto/update-classrooms_type.dto';
import { ParseBigIntPipe } from 'src/other/pipes/ParseBigIntPipe';
import { AuthGuard } from 'src/users/auth/auth.guard';

@Controller('api/classrooms-types')
@UseGuards(AuthGuard)
export class ClassroomsTypesController {
  constructor(private readonly classroomsTypesService: ClassroomsTypesService) { }

  @Get()
  getAll(
    @Query("premise", ParseBigIntPipe) premise_id: bigint
  ) {
    return this.classroomsTypesService.getAll()
  }

  @Post()
  create(
    @Body() createClassroomsTypeDto: CreateClassroomsTypeDto
  ) {
    return this.classroomsTypesService.create(createClassroomsTypeDto)
  }

  @Put(':id')
  update(
    @Param('id', ParseBigIntPipe) type_id: bigint,
    @Body() updateClassroomsTypeDto: UpdateClassroomsTypeDto
  ) {
    return this.classroomsTypesService.update(type_id, updateClassroomsTypeDto)
  }

  @Delete(':id')
  remove(
    @Param('id', ParseBigIntPipe) type_id: bigint
  ) {
    return this.classroomsTypesService.remove(type_id)
  }
}
