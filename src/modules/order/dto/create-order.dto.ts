export class CreateOrderDto {
  products: {
    productId: string;
    quantity: number;
  }[];
  customer?: {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: {
      firstLine: string;
      secondLine: string;
      city: string;
      postalCode: string;
    };
  };
  customerId?: string;
}
