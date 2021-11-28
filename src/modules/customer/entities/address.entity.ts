import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Address {
  @Field()
  firstLine: string;
  @Field()
  secondLine: string;
  @Field()
  city: string;
  @Field()
  postalCode: string;
}
