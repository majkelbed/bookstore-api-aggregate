import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { CoreApi } from 'src/clients/core';

@Module({
  controllers: [OrderController],
  providers: [OrderService, CoreApi]
})
export class OrderModule {}
