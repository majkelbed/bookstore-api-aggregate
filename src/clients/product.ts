import { BadRequestException, Injectable, Req } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class ProductApi {
  private readonly api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: process.env.PRODUCT_API_URL,
    });
  }

  async getAll() {
    try {
      const response = await this.api.get('/Products');
      return response;
    } catch (error) {
      if(axios.isAxiosError(error)) {
        console.error(error.response.data);
        throw new BadRequestException(error.response.data);
      }
    }
    return 
  }

  async getOne(id: number) {
    try {
      const response = await this.api.get(`/Products/${id}`);
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
