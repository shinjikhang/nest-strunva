import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRespository: Repository<User>,
  ) {}

  async findOne(email: string) {
    const user = await this.userRespository.findOne({
      where: { email: email },
    });
    if (!user) {
      throw new NotFoundException(`#${email} not found`);
    }
    return user;
  }
}
