import { Controller, Get, Post, Delete, Put, UseGuards, Param, Body } from '@nestjs/common';
import { ClassroomsService } from './classrooms.service';
import { AuthGuard } from 'src/users/auth/auth.guard';
import { CreateClassroomDto } from './dto/create-classroom.dto';
import { UpdateClassroomDto } from './dto/update-classroom.dto';
import { ParseBigIntPipe } from 'src/other/pipes/ParseBigIntPipe';

@Controller('api/classrooms')
@UseGuards(AuthGuard)
export class ClassroomsController {
  constructor(private readonly classroomsService: ClassroomsService) { }

  @Get()
  getClassrooms(
  ) {
    return this.classroomsService.getClassrooms()
  }

  @Post()
  addClassrooms(
    @Body() body: CreateClassroomDto,
  ) {
    return this.classroomsService.addClassrooms(body)
  }

  @Put(":id")
  modifyClassrooms(
    @Body() body: UpdateClassroomDto,
    @Param("id", ParseBigIntPipe) classroom_id: bigint
  ) {
    return this.classroomsService.modifyClassrooms(body, classroom_id)
  }

  @Delete(":id")
  removeClassrooms(
    @Param("id", ParseBigIntPipe) classroom_id: bigint
  ) {
    return this.classroomsService.removeClassrooms(classroom_id)
  }
}
