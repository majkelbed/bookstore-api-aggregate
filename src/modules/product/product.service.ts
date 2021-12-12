import { Injectable } from '@nestjs/common';
import { ProductApi } from 'src/clients/product';
import { CreateReviewDto } from './dto/create-review.dto';

@Injectable()
export class ProductService {
  constructor(private readonly productApi: ProductApi) {}

  async findAll() {
    const response = await this.productApi.getAll();
    return response.data;
  }

  async findOne(id: string) {
    const productResponse = await this.productApi.getOne(id);
    const reviewsResponse = await this.productApi.getAllReviews(id);
    const reviews = reviewsResponse.data;
    const rating = reviews.length > 0 ? reviews.reduce((sum, review) => sum + review.stars, 0) / reviews.length : 0;

    return {
      ...productResponse.data,
      rating,
      reviews
    };
  }

  async createReview(createReviewDto: CreateReviewDto) {
    const response = await this.productApi.createReview(createReviewDto);
    return response.data;
  }
}
