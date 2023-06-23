import { IsNumber, IsString } from 'class-validator';

export class CreateCoffeeDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly brand: string;

  @IsString({ each: true }) //each value in flavors must be a string
  readonly flavors: string[];

  @IsString()
  readonly description: string;

  @IsNumber()
  readonly price: number;
}
