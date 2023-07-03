import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly coffeeRepository: Repository<User>,
  ) {}

  async findOne(email: string): Promise<User> {
    const coffee = await this.coffeeRepository.findOne({
      where: { email: email },
    });
    if (!coffee) {
      throw new NotFoundException(`#${email} not found`);
    }
    return coffee;
  }
}
