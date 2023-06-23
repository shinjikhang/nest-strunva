import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffee')
export class CoffeesController {
  constructor(private readonly coffeeService: CoffeesService) {}

  @Get('')
  @HttpCode(HttpStatus.BAD_REQUEST)
  getAll(@Query() paginationQuery): any {
    const { limit, offset } = paginationQuery;
    return this.coffeeService.findAll();
  }

  @Get(':id')
  getCoffee(@Param('id') id: number): any {
    console.log(typeof id);
    return this.coffeeService.findOne('' + id);
  }

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    this.coffeeService.create(createCoffeeDto);
    return createCoffeeDto;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateCoffeeDto) {
    return this.coffeeService.update(id, updateDto);
  }
}
