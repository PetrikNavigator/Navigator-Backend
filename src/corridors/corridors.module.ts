import { Module } from '@nestjs/common';
import { CorridorsService } from './corridors.service';
import { CorridorsController } from './corridors.controller';
import { PrismaModule } from 'src/other/prisma/prisma.module';
import { AdminsModule } from 'src/users/admins/admins.module';
import { BuildingsModule } from '../buildings/buildings.module';

@Module({
  imports: [PrismaModule, AdminsModule, BuildingsModule],
  controllers: [CorridorsController],
  providers: [CorridorsService],
  exports: [CorridorsService]
})
export class CorridorsModule { }
