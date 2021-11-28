import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field({ description: 'Product UUID' })
  id: string;

  @Field(() => Int, { description: 'Product name' })
  name: number;

  @Field({ description: 'Product description' })
  description: string;

  @Field(() => Float, { description: 'Product price' })
  price: number;
}
