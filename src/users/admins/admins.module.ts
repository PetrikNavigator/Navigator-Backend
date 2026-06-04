import { Module } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { PrismaModule } from 'src/other/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [PrismaModule, JwtModule],
  providers: [AdminsService],
  exports: [AdminsService],
})
export class AdminsModule {}
