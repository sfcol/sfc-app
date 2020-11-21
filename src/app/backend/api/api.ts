export * from './customer.service';
import { CustomerService } from './customer.service';
export * from './product.service';
import { ProductService } from './product.service';
export const APIS = [CustomerService, ProductService];
