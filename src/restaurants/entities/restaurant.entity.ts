import { Field, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Restaurant {
  @Field(() => Number)
  @PrimaryGeneratedColumn()
  @IsNumber()
  id: number;

  @Field(() => String)
  @Column()
  @IsString()
  name: string;

  @Field(() => Boolean, { defaultValue: false })
  @Column({ default: false })
  @IsOptional()
  @IsBoolean()
  isVegan: boolean;

  @Field(() => String)
  @Column()
  @IsString()
  address: string;

  @Field(() => String)
  @Column()
  @IsString()
  ownerName: string;
}
