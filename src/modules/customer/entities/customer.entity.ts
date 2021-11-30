import { Address } from './address.entity';

export class Customer {
  name: string;

  email: string;

  phone: string;

  password: string;

  repeatPassword: string;

  address: Address;
}
