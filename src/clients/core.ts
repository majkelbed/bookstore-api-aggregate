import { BadRequestException, Injectable, Req } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { Request } from 'express';
import { LoginCustomerDto } from 'src/modules/customer/dto/login-customer.dto';
import { RegisterCustomerDto } from 'src/modules/customer/dto/register-customer.dto';

interface OrderBody {
    products: {
        productId: string;
        quantity: number;
    }[];
    customerId: string;
}

@Injectable()
export class CoreApi {
  private readonly api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: process.env.CORE_API_URL,
    });
  }

  async login(data: LoginCustomerDto) {
    try {
      const response = await this.api.post('/customers/login', data);
      return response;
    } catch (error) {
      if(axios.isAxiosError(error)) {
        console.error(error.response.data);
        throw new BadRequestException(error.response.data);
      }
    }
    return 
  }

  async register(data: RegisterCustomerDto) {
    try {
      const response = await this.api.post<{ token: string }>('/customers/registration', data);
      return response;
    } catch (error) {
      if(axios.isAxiosError(error)) {
        console.error(error.response.data);
        throw new BadRequestException(error.response.data);
      }
    }
  }

  async getOne(id: string, @Req() request: Request) {
    try {
      const response = await this.api.get(`/customers/${id}`, {
        headers: {
          "Authorization": request.headers.authorization
        }
      });
      return response;
    } catch (error) {
      if(axios.isAxiosError(error)) {
        console.error(error.response.data);
        throw new BadRequestException(error.response.data);
      }
    }
    return 
  }
}
