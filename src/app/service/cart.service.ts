import { Injectable } from '@angular/core';
import { Fruits } from '../fruits/fruits';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items:Fruits[] = [];
  BaseUrl='http://localhost:3000/items'

  constructor(private http: HttpClient) { }

  addToCart(product:Fruits){
    console.log(this.items,"caertItems")
    let productExists= false

    for(let i in this.items){
      if(this.items[i].id === product.id){
        this.items[i].Quantity++
        productExists=true;

      }


    }

    if(!productExists){

       this.items.push({
          id:product.id,
          Name: product.Name,
           Quantity:product.Quantity,
         Price:product.Price,
           irl:product.irl})
    }

  }
  deleteToCart(product:Fruits) {
    this.items.pop();
  }

  getItems(){
    return this.items;
    // return this.http.get<Fruits[]>(`${this.BaseUrl}`);

  }

  // addToCart(product:Fruits):Observable<any>{
  //   return this.http.post<Fruits[]>(`${this.BaseUrl}`,product);
  // }


  itemsCount(){
    return this.items.length;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
