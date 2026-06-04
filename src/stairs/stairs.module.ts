import { Module } from '@nestjs/common';
import { StairsService } from './stairs.service';
import { StairsController } from './stairs.controller';
import { PrismaModule } from 'src/other/prisma/prisma.module';
import { AdminsModule } from 'src/users/admins/admins.module';
import { BuildingsModule } from '../buildings/buildings.module';
import { StairsPublicController } from './stairs.public.controller';

@Module({
  imports: [PrismaModule, AdminsModule, BuildingsModule],
  controllers: [StairsController, StairsPublicController],
  providers: [StairsService],
  exports: [StairsService]
})
export class StairsModule {}
