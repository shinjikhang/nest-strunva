import { Public } from './../common/decorators/public.decorator';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { PaginationQueryDto } from '../common/dto/paginaton-query.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Coffee } from './entities/coffee.entity';

@Controller('coffee')
@ApiTags('Coffee')
export class CoffeesController {
  constructor(private readonly coffeeService: CoffeesService) {}

  @ApiResponse({ status: 403, description: 'Forbiden' })
  @Public()
  @Get()
  async getAll(@Query() paginationQuery: PaginationQueryDto) {
    // await new Promise((resolve) => setTimeout(resolve, 4000)); //await 5s, 3s timeout interceptor
    return this.coffeeService.findAll(paginationQuery);
  }

  @Public()
  @Get(':id')
  getCoffee(@Param('id') id: number): any {
    return this.coffeeService.findOne(id);
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

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.coffeeService.remove(id);
  }
}
