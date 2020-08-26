import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart.service';
import { Order } from 'src/app/shared/models/Order';
import { CartItem } from 'src/app/shared/models/CartItem';
import { OrderService } from 'src/app/core/services/order.service';
import { OrderStatus } from 'src/app/shared/enums/order-staturs.enum';

@Component({
  selector: 'app-finalize-order',
  templateUrl: './finalize-order.component.html',
  styleUrls: ['./finalize-order.component.scss']
})
export class FinalizeOrderComponent implements OnInit {

  addressForm: FormGroup;
  paymentForm: FormGroup;
  isEditable = false;
  purchaserId: string;
  cart: CartItem[];
  constructor(private fb: FormBuilder, private authService: AuthService, private cartService: ShoppingCartService, private orderService: OrderService) { }

  ngOnInit() {
    this.addressForm = this.fb.group({
      address: []
    });
    this.paymentForm = this.fb.group({
      paymentMethod: []
    })
    if(this.authService.user$){
      this.authService.user$.subscribe((user) => {
        if(user.address){
          this.addressForm.controls['address'].setValue(user.address);
        }
        this.purchaserId = user.uid;
      })
    }
    
    this.cart = this.cartService.read();
  }

  order(){
      let order = <Order>{};
      order.items = this.cart;
      order.address = this.addressForm.value;
      order.paymentMethod = this.paymentForm.value.paymentMethod.paymentMethod;
      order.purchaserId = this.purchaserId;
      order.date = new Date();
      order.status = OrderStatus.O;
      this.orderService.makeOrder(order).then(data => {console.log(data);this.cartService.clearCart()});
  }
}
