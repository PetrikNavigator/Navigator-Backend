import { Module } from '@nestjs/common';
import { CorridorsService } from './corridors.service';
import { CorridorsController } from './corridors.controller';
import { PrismaModule } from 'src/other/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CorridorsController],
  providers: [CorridorsService],
  exports: [CorridorsService]
})
export class CorridorsModule { }
