import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';
import { updateRestaurantDto } from './dtos/update-restaurant.dto';

@Injectable()
export class RestaurantsService {
  constructor(
    @InjectRepository(Restaurant)
    private readonly restaurants: Repository<Restaurant>,
  ) {}

  getAll(): Promise<Restaurant[]> {
    return this.restaurants.find();
  }

  createRestaurant(restaurantDto: CreateRestaurantDto): Promise<Restaurant> {
    const restaurant = this.restaurants.create(restaurantDto);
    return this.restaurants.save(restaurant);
  }

  updateRestaurant({ id, data }: updateRestaurantDto): Promise<UpdateResult> {
    return this.restaurants.update(id, { ...data });
  }
}
