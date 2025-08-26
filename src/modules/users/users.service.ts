import { Injectable } from '@nestjs/common';

import { PrismaService } from '@modules/prisma/prisma.service';
import { CreateUserRequestDto } from '@modules/users/dto/user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async createNewUser(user: CreateUserRequestDto) {
    const newUser = await this.prisma.user.create({ data: user });

    return 'User created successfully.';
  }
}
