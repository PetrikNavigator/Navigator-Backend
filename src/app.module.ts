import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './users/auth/auth.module';
import { AdminsModule } from './users/admins/admins.module';
import { BuildingsModule } from './buildings/buildings.module';
import { ClassroomsModule } from './classrooms/classrooms.module';
import { LiftsModule } from './lifts/lifts.module';
import { StairsModule } from './stairs/stairs.module';
import { JwtModule } from '@nestjs/jwt';
import { CorridorsModule } from './corridors/corridors.module';
import { ClassroomsTypesModule } from './classrooms_types/classrooms_types.module';
import { NavModule } from './nav/nav.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule, AdminsModule, BuildingsModule, ClassroomsModule,
    LiftsModule, StairsModule, JwtModule, CorridorsModule,
    ClassroomsTypesModule, NavModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }