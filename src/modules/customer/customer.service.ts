import { Injectable } from '@nestjs/common';
import { CoreApi } from 'src/clients/core';
import { RegisterCustomerInput } from './dto/register-customer.input';

@Injectable()
export class CustomerService {
  constructor(private readonly coreApi: CoreApi) {}

  register(registerCustomerInput: RegisterCustomerInput) {
    try {
      return this.coreApi.register(registerCustomerInput);
    } catch (e) {
      console.log('no się nie udało');
    }
  }
}
