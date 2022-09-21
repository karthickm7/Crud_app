import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cartcomponent',
  templateUrl: './cartcomponent.component.html',
  styleUrls: ['./cartcomponent.component.scss']
})
export class CartcomponentComponent implements OnInit {

  items = this.cartService.getItems();
  checkoutForm = this.fb.group({
    name: '',
    address: ''
  });


  constructor(private cartService:CartService, private fb: FormBuilder,) { }

  ngOnInit(): void {


  }

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

}
