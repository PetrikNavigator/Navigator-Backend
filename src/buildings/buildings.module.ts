import { Module } from '@nestjs/common';
import { BuildingsService } from './buildings.service';
import { BuildingsController } from './buildings.controller';
import { PrismaModule } from 'src/other/prisma/prisma.module';
import { AdminsModule } from 'src/users/admins/admins.module';

@Module({
  imports: [PrismaModule, AdminsModule],
  controllers: [BuildingsController],
  providers: [BuildingsService],
  exports: [BuildingsService]
})
export class BuildingsModule { }
