import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { FormBuilder } from '@angular/forms';


import { Fruits } from '../fruits';


declare var window: any;
@Component({
  selector: 'app-cartcomponent',
  templateUrl: './cartcomponent.component.html',
  styleUrls: ['./cartcomponent.component.scss']
})
export class CartcomponentComponent implements OnInit {
  
  items:Fruits[]=[];
  checkoutForm = this.fb.group({
    name: '',
    address: ''
  });
  // deleteModal: any;
  // valueTodelete: any;
  cartTotal=0;
 

  constructor(private cartService:CartService, private fb: FormBuilder,) { }

  ngOnInit(): void {
    console.log(this.items,'items')
      this.items.forEach(item=>{
        this.cartTotal+=(item.Quantity *item.Price)
      });
      this.get();

    // this.deleteModal = new window.bootstrap.Modal(
    //   document.getElementById('deleteModal')
    // );
  }

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }


  // openDeleteModal(values: any) {
  //   this.valueTodelete = values;
  //   this.deleteModal.show();
  // }
  delete(Product:Fruits){

   console.log(this.items.indexOf(Product),"iiiiii")

   this.items.splice(this.items.indexOf(Product),1)
  }

  get() {
    this.cartService.getItems().subscribe((data) => {
      this.items = data;
    });
  }

  onIncrement(product:Fruits){
    console.log(this.items)
    product.Quantity +=1;
  }

  onDecrement(product:Fruits){
    console.log(this.items)
    if(product.Quantity !=1){
      product.Quantity -=1
    }
    }
    onKey(event:any){
      console.log(this.items,'keyyyy')
      event.target.value
    }

}
