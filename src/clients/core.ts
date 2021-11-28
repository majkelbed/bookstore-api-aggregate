import { BadRequestException, Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { RegisterCustomerInput } from 'src/modules/customer/dto/register-customer.input';

interface LoginBody {
    email: string;
    password: string;
}

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

  login(data: LoginBody) {
    return this.api.post('customers/login', { data });
  }

  async register(data: RegisterCustomerInput) {
    try {
      const res = await this.api.post('/customers/registration', { data });
      return res;
    } catch (error) {
      if(axios.isAxiosError(error)) {
        console.error(error.response.data);
        throw new BadRequestException(error.response.data);
      }
    }
  }

  createOrder(data: OrderBody) {
    return this.api.post('/orders', { data });
  }
}
