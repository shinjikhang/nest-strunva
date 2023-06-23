import { PartialType, PickType } from '@nestjs/mapped-types';
import { CreateCoffeeDto } from './create-coffee.dto';
import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';

// export class UpdateCoffeeDto extends PickType(CreateCoffeeDto, ['name'] as const) { // chỉ pick update propety "name"
// export class UpdateCoffeeDto extends OmitType(CreateCoffeeDto, ['name'] const) { // chỉ ommit(loại bỏ) update propety "name"
// export class UpdateCatDto extends IntersectionType(CreateCatDto,AdditionalCatInfo) {} // kết hợp cả 2 class dto
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {
  @IsString()
  @IsOptional()
  readonly name?: string;

  @IsString()
  @IsOptional()
  readonly brand?: string;

  @IsArray()
  @IsOptional()
  readonly flavors?: string[];

  @IsNumber()
  @IsOptional()
  readonly price: number;
}
