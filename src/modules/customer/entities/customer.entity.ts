import { ObjectType, Field } from '@nestjs/graphql';
import { Address } from './address.entity';

@ObjectType()
export class Customer {
  @Field()
  name: string;
  @Field()
  email: string;
  @Field()
  phone: string;
  @Field()
  password: string;
  @Field()
  repeatPassword: string;
  @Field(type => Address)
  address: Address
}
