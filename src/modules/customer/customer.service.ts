import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { CoreApi } from 'src/clients/core';
import { LoginCustomerDto } from './dto/login-customer.dto';
import { RegisterCustomerDto } from './dto/register-customer.dto';

@Injectable()
export class CustomerService {
  constructor(private readonly coreApi: CoreApi) {}

  async register(dto: RegisterCustomerDto) {
    const response = await this.coreApi.register(dto);
    return response.data;
  }

  async login(dto: LoginCustomerDto) {
    const response = await this.coreApi.login(dto);
    return response.data;
  }

  async findOne(id: string, request: Request) {
    const response = await this.coreApi.getOne(id, request);
    return response.data;
  }

  async update(dto: RegisterCustomerDto, request: Request) {
    const response = await this.coreApi.update(dto, request);
    return response.data;
  }
}
