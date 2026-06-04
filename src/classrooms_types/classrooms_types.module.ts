import { Module } from '@nestjs/common';
import { ClassroomsTypesService } from './classrooms_types.service';
import { ClassroomsTypesController } from './classrooms_types.controller';
import { PrismaModule } from 'src/other/prisma/prisma.module';
import { AdminsModule } from 'src/users/admins/admins.module';
import { BuildingsModule } from '../buildings/buildings.module';

@Module({
  imports: [PrismaModule, AdminsModule, BuildingsModule],
  controllers: [ClassroomsTypesController],
  providers: [ClassroomsTypesService],
})
export class ClassroomsTypesModule {}
