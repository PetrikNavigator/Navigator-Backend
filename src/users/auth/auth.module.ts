import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AdminsModule } from 'src/users/admins/admins.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaModule } from 'src/other/prisma/prisma.module';

@Module({
  imports: [
    JwtModule.registerAsync({
      global: true,
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        const secret = configService.get<string>('JWT_SECRET')
        if (!secret || secret.trim().length < 16) {
          throw new Error('JWT_SECRET must be set to a strong value (at least 16 characters)')
        }
        return {
          secret,
          signOptions: { expiresIn: "24h" }
        }
      },
      inject: [ConfigService]
    }),
    AdminsModule,
    PrismaModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthModule]
})
export class AuthModule { }
