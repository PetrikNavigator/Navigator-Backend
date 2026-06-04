import { Module } from '@nestjs/common';
import { LiftsService } from './lifts.service';
import { LiftsController } from './lifts.controller';
import { PrismaModule } from 'src/other/prisma/prisma.module';
import { AdminsModule } from 'src/users/admins/admins.module';
import { BuildingsModule } from '../buildings/buildings.module';

@Module({
  imports: [PrismaModule, AdminsModule, BuildingsModule],
  controllers: [LiftsController],
  providers: [LiftsService],
  exports: [LiftsService]
})
export class LiftsModule {}
