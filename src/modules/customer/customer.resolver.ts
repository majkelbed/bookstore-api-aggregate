import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CustomerService } from './customer.service';
import { Customer } from './entities/customer.entity';
import { RegisterCustomerInput } from './dto/register-customer.input';

@Resolver(() => Customer)
export class CustomerResolver {
  constructor(private readonly customerService: CustomerService) {}

  // @Query(() => Customer)
  // findAll(): Customer[] {
  //   return [];
  // }

  @Mutation(() => Customer)
  registerCustomer(
    @Args('registerCustomerInput') registerCustomerInput: RegisterCustomerInput,
  ) {
    return this.customerService.register(registerCustomerInput);
  }
}
