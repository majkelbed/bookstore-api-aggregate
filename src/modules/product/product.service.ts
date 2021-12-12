import { Injectable } from '@nestjs/common';
import { ProductApi } from 'src/clients/product';

@Injectable()
export class ProductService {
  constructor(private readonly productApi: ProductApi) {}

  async findAll() {
    const response = await this.productApi.getAll();
    return response.data;
  }

  async findOne(id: number) {
    const response = await this.productApi.getOne(id);
    return response.data;
  }
}
