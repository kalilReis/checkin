import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';

@Controller('orders')
export class OrderController {
  @Get()
  @HttpCode(HttpStatus.OK)
  get() {
    return 1;
  }
}
