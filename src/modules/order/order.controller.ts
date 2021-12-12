import { Controller, Get, Post, Body, Req } from '@nestjs/common';
import { Request } from 'express';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto, @Req() request: Request) {
    return this.orderService.create(createOrderDto, request);
  }

  @Get()
  findAll() {
    return this.orderService.findAll();
  }
}
