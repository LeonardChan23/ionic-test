import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WoocommerceService {
  url: string = "https://asiapaytest.flywheelsites.com";
  consumerKey: string = "ck_5278c93675e528e6f90379c9866d65b5f0b754d8";
  consumerSecret: string = "cs_1bb25171b5e5c200b21c95fb352c0b1924b52bb6";

  constructor(private http: HttpClient) { }

  getProducts() {
    return `${this.url}/wp-json/wc/v3/products?consumer_key=${
      this.consumerKey
      }&consumer_secret=${this.consumerSecret}`;
  }

  getTags() {
    return new Promise(resolve => {
      this.http
        .get(
          `${this.url}/wp-json/wc/v3/products/tags?consumer_key=${this.consumerKey}&consumer_secret=${this.consumerSecret}`
        )
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  getProduct(pid) {
    return new Promise(resolve => {
      this.http
        .get(
          `${this.url}/wp-json/wc/v3/products/${pid}?consumer_key=${
          this.consumerKey
          }&consumer_secret=${this.consumerSecret}`
        )
        .subscribe(productData => {
          resolve(productData);
        });
    });
  }

  getProductReviews(pid) {
    return new Promise(resolve => {
      this.http
        .get(
          `${this.url}/wp-json/wc/v2/products/${pid}/reviews?consumer_key=${
          this.consumerKey
          }&consumer_secret=${this.consumerSecret}`
        )
        .subscribe(productData => {
          resolve(productData);
        });
    });
  }
}
