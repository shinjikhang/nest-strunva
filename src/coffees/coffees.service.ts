import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
  Query,
} from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy brew',
      flavors: ['chocolate', 'vanila', 'matcha'],
    },
    {
      id: 2,
      name: 'Roast',
      brand: 'Buddy',
      flavors: ['chocolate', 'vanila', 'matcha'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    const coffee = this.coffees.find((item) => item.id === +id);
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return coffee;
  }

  create(createDto: any) {
    this.coffees.push(createDto);
  }

  update(id: string, updateDto) {
    const existCoffee = this.findOne(id);
    if (existCoffee) {
      //Update data
    }
  }

  remove(id: string) {
    const coffeeIndex: number = this.coffees.findIndex(
      (item: Coffee): boolean => item.id === +id,
    );

    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
