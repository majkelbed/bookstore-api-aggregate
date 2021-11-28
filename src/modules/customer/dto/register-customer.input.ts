import { InputType, Field } from '@nestjs/graphql';

@InputType()
class RegisterCustomerAddressInput {
  @Field()
  firstLine: string;
  @Field()
  secondLine: string;
  @Field()
  city: string;
  @Field()
  postalCode: string;
}

@InputType()
export class RegisterCustomerInput {
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
  @Field(type => RegisterCustomerAddressInput)
  address: RegisterCustomerAddressInput
}
