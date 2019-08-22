import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products = [];
  cart = [];

  constructor() { 
    this.products =[
      {
        name : "Printer",
        price : 8000,
        company : "HP"
      },
      {
        name : "Scanner",
        price : 12000,
        company : "HP"
      },
      {
        name : "Keyboard",
        price : 1800,
        company : "HP"
      }
    ]
  }

  ngOnInit() {
  }

  addToCart(i){
    this.cart.push(this.products[i]);
  }

  removeFromCart(i){
    this.cart.splice(i,1);
  }
}
