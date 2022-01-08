import { Controller, Get, Post, Body, Param, Req, Patch } from '@nestjs/common';
import { Request } from 'express';
import { CustomerService } from './customer.service';
import { LoginCustomerDto } from './dto/login-customer.dto';
import { RegisterCustomerDto } from './dto/register-customer.dto';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post('registration')
  register(@Body() registerCustomerDto: RegisterCustomerDto) {
    return this.customerService.register(registerCustomerDto);
  }

  @Post('login')
  login (@Body() loginCustomerDto: LoginCustomerDto) {
    return this.customerService.login(loginCustomerDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Req() request: Request) {
    return this.customerService.findOne(id, request);
  }

  @Patch("")
  update(@Body() updateCustomerDto: RegisterCustomerDto, @Req() request: Request) {
    return this.customerService.update(updateCustomerDto, request);
  }
}
