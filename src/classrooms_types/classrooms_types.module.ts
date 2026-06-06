import { Module } from '@nestjs/common';
import { ClassroomsTypesService } from './classrooms_types.service';
import { ClassroomsTypesController } from './classrooms_types.controller';
import { PrismaModule } from 'src/other/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ClassroomsTypesController],
  providers: [ClassroomsTypesService],
})
export class ClassroomsTypesModule {}
