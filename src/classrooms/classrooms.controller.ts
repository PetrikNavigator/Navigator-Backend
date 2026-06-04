import { Controller, Get, Post, Delete, Put, UseGuards, Req, Param, Body, Query } from '@nestjs/common';
import { ClassroomsService } from './classrooms.service';
import { AuthGuard } from 'src/users/auth/auth.guard';
import type { AuthenticatedRequest } from 'src/other/types/admin-types';
import { CreateClassroomDto } from './dto/create-classroom.dto';
import { UpdateClassroomDto } from './dto/update-classroom.dto';
import { ParseBigIntPipe } from 'src/other/pipes/ParseBigIntPipe';
import {
  ApiAddClassroom,
  ApiClassroomsController,
  ApiGetClassrooms,
  ApiModifyClassroom,
  ApiRemoveClassroom,
} from 'src/other/decorators/documentation/classrooms.decorators';

@ApiClassroomsController()
@Controller('api/classrooms')
@UseGuards(AuthGuard)
export class ClassroomsController {
  constructor(private readonly classroomsService: ClassroomsService) { }

  @Get()
  @ApiGetClassrooms()
  getClassrooms(
  ) {
    return this.classroomsService.getClassrooms()
  }

  @Post()
  @ApiAddClassroom()
  addClassrooms(
    @Body() body: CreateClassroomDto,
  ) {
    return this.classroomsService.addClassrooms(body)
  }

  @Put(":id")
  @ApiModifyClassroom()
  modifyClassrooms(
    @Body() body: UpdateClassroomDto,
    @Param("id", ParseBigIntPipe) classroom_id: bigint
  ) {
    return this.classroomsService.modifyClassrooms(body, classroom_id)
  }

  @Delete(":id")
  @ApiRemoveClassroom()
  removeClassrooms(
    @Param("id", ParseBigIntPipe) classroom_id: bigint
  ) {
    return this.classroomsService.removeClassrooms(classroom_id)
  }
}
