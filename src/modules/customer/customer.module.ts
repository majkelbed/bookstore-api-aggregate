import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerResolver } from './customer.resolver';
import { CoreApi } from 'src/clients/core';

@Module({
  providers: [CustomerResolver, CustomerService, CoreApi]
})
export class CustomerModule {}
