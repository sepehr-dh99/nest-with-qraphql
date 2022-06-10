import { Restaurant } from '../entities/restaurant.entity';
import { Field, InputType, OmitType } from '@nestjs/graphql';

@InputType()
export class CreateRestaurantDto extends OmitType(
  Restaurant,
  ['id'],
  InputType,
) {}
