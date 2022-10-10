import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
url = 'asiapaytest.flywheelsites.com';
consumerKey = 'ck_5278c93675e528e6f90379c9866d65b5f0b754d8';
consumerSecret = 'cs_1bb25171b5e5c200b21c95fb352c0b1924b52bb6';
  constructor() {
    
   }

  ngOnInit() {
    
  }
 
  
  getProducts() {
    return `${this.url}/wp-json/wc/v3/products?consumer_key=${
      this.consumerKey
    }&consumer_secret=${this.consumerSecret}`;
  }

}
