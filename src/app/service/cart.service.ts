import { Injectable } from '@angular/core';
import { Fruits } from '../fruits/fruits';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items:Fruits[] = [];

  constructor() { }
  addToCart(product:Fruits) {
    let count:number=0;
    for(let values of this.items){
      if(values.id == product.id){
       count++;
      }
    }
    if(count>0){
      product.Quantity+=1;
      console.log('already exist')

    }else{
      this.items.push(product);
      console.log('newly added')
    }

  }
  deleteToCart(product:Fruits) {
    this.items.pop();
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
