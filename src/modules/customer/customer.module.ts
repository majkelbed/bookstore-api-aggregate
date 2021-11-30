import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { CoreApi } from 'src/clients/core';

@Module({
  controllers: [CustomerController],
  providers: [CustomerService, CoreApi]
})
export class CustomerModule {}
