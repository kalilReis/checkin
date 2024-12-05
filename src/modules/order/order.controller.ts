import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';

import { OrderService } from './order.service';

@Controller('orders')
export class OrderController {
  constructor(private service: OrderService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  get() {
    return this.service.get();
  }
}
