import { Injectable } from '@angular/core';
import { Fruits } from '../fruits/fruits';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items:Fruits[] = [];

  constructor() { }
  addToCart(product:Fruits) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  itemsCount(){
    return this.items.length;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
