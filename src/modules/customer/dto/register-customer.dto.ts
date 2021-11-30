export class RegisterCustomerAddressDto {
  firstLine: string;
  secondLine: string;
  city: string;
  postalCode: string;
}

export class RegisterCustomerDto {
  name: string;
  email: string;
  phone: string;
  password: string;
  repeatPassword: string;
  address: RegisterCustomerAddressDto;
}
