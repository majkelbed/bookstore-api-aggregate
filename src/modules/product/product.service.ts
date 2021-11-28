import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  findAll() {
    return [];
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }
}
