import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ProductService {
  private products = new Array<unknown>();

  async get() {
    if (this.products.length) {
      return this.products;
    }

    const { STORE_PRODUCTS_URL, CONSUMER_KEY, CONSUMER_SECRET } = process.env;

    const headers = {
      Authorization: 'Basic ' + btoa(`${CONSUMER_KEY}:${CONSUMER_SECRET}`),
    };

    const resp = await axios.get(STORE_PRODUCTS_URL ?? '', { headers });
    this.products = resp.data as unknown[];

    return this.products;
  }
}
