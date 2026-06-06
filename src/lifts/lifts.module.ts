import { Module } from '@nestjs/common';
import { LiftsService } from './lifts.service';
import { LiftsController } from './lifts.controller';
import { PrismaModule } from 'src/other/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [LiftsController],
  providers: [LiftsService],
  exports: [LiftsService]
})
export class LiftsModule {}
