import { Component, OnInit} from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
  checkoutForm;

  constructor(
      private cartService: CartService,
      private formBuilder: FormBuilder,

  ) 
  // to store value 
  { 
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }
  
  // get items from cart
  ngOnInit() {
    this.items = this.cartService.getItems();

  }

  onSubmit(customerData) {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
  }

}