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

  dataForm: FormGroup;
  paymentForm: FormGroup;
  isEditable = false;
  purchaserId: string;
  cart: CartItem[];
  constructor(private fb: FormBuilder, private authService: AuthService, private cartService: ShoppingCartService, private orderService: OrderService) { }

  ngOnInit() {

    this.cart = this.cartService.read();

    this.dataForm = this.fb.group({
      address: ['', Validators.required],
      contactForm: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
      })
    });
    this.paymentForm = this.fb.group({
      paymentMethod: []
    })
    if (this.authService.user$) {
      this.authService.user$.subscribe((user) => {
        if (user.address) {
          this.dataForm.controls['address'].setValue(user.address);
        }
        this.dataForm.get('contactForm.email').setValue(user.email);
        this.dataForm.get('contactForm.phone').setValue(user.phone);
        this.purchaserId = user.uid;
      })
    }
  }

  order() {
    let order = <Order>{};
    order.items = this.cart;
    order.address = this.dataForm.value.address;
    order.paymentMethod = this.paymentForm.value.paymentMethod.paymentMethod;
    order.purchaserId = this.purchaserId;
    order.date = new Date();
    order.status = OrderStatus.O;
    order.email = this.dataForm.get('contactForm.email').value;
    order.phone = this.dataForm.get('contactForm.phone').value;
    this.orderService.makeOrder(order).then(data => { this.cartService.clearCart() });
  }
}
