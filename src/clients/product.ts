import { BadRequestException, Injectable, Req } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { CreateReviewDto } from 'src/modules/product/dto/create-review.dto';

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

  async getAllReviews(id: string) {
    try {
      const response = await this.api.get(`/Reviews/${id}`);
      return response;
    } catch (error) {
      if(axios.isAxiosError(error)) {
        console.error(error.response.data);
        throw new BadRequestException(error.response.data);
      }
    }
    return 
  }

  async getOne(id: string) {
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

  async createReview(createReviewDto: CreateReviewDto) {
    try {
      const response = await this.api.post(`/Reviews`, createReviewDto);
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
