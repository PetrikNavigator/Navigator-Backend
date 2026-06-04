import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AdminsService } from 'src/users/admins/admins.service';
import * as bcrypt from "bcrypt"
import { JwtService } from '@nestjs/jwt';
import { LoggedInAdmin, } from 'src/other/types/admin-types';
import { PrismaService } from 'src/other/prisma/prisma.service';

const BCRYPT_ROUNDS = 10
type CreatableRole = "STUDENT" | "PREMISE_ADMIN"
const DUMMY_HASH = bcrypt.hashSync('unknown-account-placeholder', BCRYPT_ROUNDS)

@Injectable()
export class AuthService {
  constructor(
    private readonly admins: AdminsService,
    private readonly jwt: JwtService,
    private readonly prisma: PrismaService,
  ) { }

  async login(email: string, password: string): Promise<{ user: LoggedInAdmin, access_token: string }> {
    const admin = await this.admins.findOne(email)

    const is_correct_password = await bcrypt.compare(
      password,
      admin?.password_hash ?? DUMMY_HASH,
    )

    if (admin === undefined || !is_correct_password) {
      throw new UnauthorizedException("Invalid email or password!")
    }

    const payload = { id: admin.id!.toString(), email: admin.email }

    const { password_hash, ...rest } = admin

    return {
      user: rest,
      access_token: await this.jwt.signAsync(payload)
    }
  }
}