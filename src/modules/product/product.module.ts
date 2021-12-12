import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductApi } from 'src/clients/product';

@Module({
  controllers: [ProductController],
  providers: [ProductService, ProductApi]
})
export class ProductModule {}
