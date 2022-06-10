import { ArgsType, Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateRestaurantDto } from './create-restaurant.dto';

@InputType()
class updateRestaurantInputs extends PartialType(CreateRestaurantDto) {}

@ArgsType()
export class updateRestaurantDto {
  @Field(() => Number)
  id: number;

  @Field(() => updateRestaurantInputs)
  data: updateRestaurantInputs;
}
