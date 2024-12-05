import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class OrderService {
  async get() {
    const { STORE_PRODUCTS_URL, CONSUMER_KEY, CONSUMER_SECRET } = process.env;

    const headers = {
      Authorization: 'Basic ' + btoa(`${CONSUMER_KEY}:${CONSUMER_SECRET}`),
    };

    const resp = await axios.get(STORE_PRODUCTS_URL ?? '', { headers });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return resp.data;
  }
}
