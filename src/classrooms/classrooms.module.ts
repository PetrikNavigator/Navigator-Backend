import { Module } from '@nestjs/common';
import { ClassroomsService } from './classrooms.service';
import { ClassroomsController } from './classrooms.controller';
import { PrismaModule } from 'src/other/prisma/prisma.module';
import { AdminsModule } from 'src/users/admins/admins.module';
import { BuildingsModule } from '../buildings/buildings.module';

@Module({
  imports: [PrismaModule, AdminsModule, BuildingsModule],
  controllers: [ClassroomsController],
  providers: [ClassroomsService],
  exports: [ClassroomsService]
})
export class ClassroomsModule { }
