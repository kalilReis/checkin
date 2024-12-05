import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';

import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private service: ProductService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  get() {
    return this.service.get();
  }
}
