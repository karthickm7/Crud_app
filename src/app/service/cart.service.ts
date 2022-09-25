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
  addToCart(product:Fruits):Observable<Fruits> {
    console.log(this.items,"caertItems")
    let productExists= false
    // let count:number=0;
    // for(let values of this.items){
    //   console.log(values.id,"iddd")
    //   if(values.id == product.id){
    //    count++;
    //   }
    // }
    // if(count>0){
    //   product.Quantity+=1;
    //   console.log('already exist')

    // }else{
    //   this.items.push(product);
    //   console.log('newly added')
    // }
    for(let i in this.items){
      if(this.items[i].id === product.id){
        this.items[i].Quantity++
        productExists=true
        break;
      }

    }

    if(!productExists){
      // this.items.push({
      //   id:product.id,
      //   Name: product.Name,
      //   Quantity:product.Quantity,
      //   Price:product.Price,
      //   irl:product.irl

      // })
      // create(Payload:Fruits):Observable<Fruits>{
      //   return this.http.post<Fruits>(`${this.baseUrl}`,Payload);
      // }
    }

  }
  deleteToCart(product:Fruits) {
    this.items.pop();
  }

  getItems() {
    //return this.items;
    return this.http.get<Fruits[]>(`${this.BaseUrl}`);

  }
  // get(){
  //   return this.http.get<Fruits[]>(`${this.baseUrl}`);

  // }

  itemsCount(){
    return this.items.length;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
