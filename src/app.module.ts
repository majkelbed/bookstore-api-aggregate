import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CustomerModule } from './modules/customer/customer.module';
import { OrderModule } from './modules/order/order.module';
import { ProductModule } from './modules/product/product.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'config/.env',
    }),
    CustomerModule,
    ProductModule,
    OrderModule
  ]
})
export class AppModule {}
