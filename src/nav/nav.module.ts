import { Module } from '@nestjs/common';
import { NavService } from './nav.service';
import { NavController } from './nav.controller';
import { PrismaModule } from 'src/other/prisma/prisma.module';
import { BuildingsModule } from '../buildings/buildings.module';
import { ClassroomsModule } from '../classrooms/classrooms.module';
import { StairsModule } from '../stairs/stairs.module';
import { LiftsModule } from '../lifts/lifts.module';
import { CorridorsModule } from '../corridors/corridors.module';
import { AdminsModule } from 'src/users/admins/admins.module';

@Module({
  imports: [
    PrismaModule, BuildingsModule,
    ClassroomsModule, StairsModule,
    LiftsModule, CorridorsModule,
    AdminsModule
  ],
  controllers: [NavController],
  providers: [NavService],
})
export class NavModule { }
