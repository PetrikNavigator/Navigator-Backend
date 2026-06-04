import { ForbiddenException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { usersModel } from 'generated/prisma/models';
import { PrismaService } from 'src/other/prisma/prisma.service';

@Injectable()
export class AdminsService {
  constructor(private readonly prisma: PrismaService) { }

  /**
   * 
   * @param email
   * @returns user or undefined
   */
  async findOne(email: string): Promise<usersModel | undefined> {
    const admin = await this.prisma.users.findFirst({
      where: { email: email }
    })

    if (!admin) {
      return undefined
    } else {
      return admin as usersModel
    }
  }
}
