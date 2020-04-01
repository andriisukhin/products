import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsResponse } from './models/products';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {}

  url = 'https://www.deadstock.ca/products.json'

  public getData() {
    return this.http.get<ProductsResponse>(this.url);
  }
}
