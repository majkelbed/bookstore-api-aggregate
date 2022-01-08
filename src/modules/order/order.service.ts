import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { CoreApi } from 'src/clients/core';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  constructor(private readonly coreApi: CoreApi) {}

  async create(createOrderDto: CreateOrderDto, request: Request) {
    const response = await this.coreApi.createOrder(createOrderDto, request);
    return response.data;
  }

  async findAll(request: Request) {
    const response = await this.coreApi.getAllOrders(request);
    return response.data;
  }
}
