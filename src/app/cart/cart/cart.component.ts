import { Component, OnInit, OnDestroy, } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/shared/models/product';
import { Observable } from 'rxjs/internal/Observable';
import { CartItem } from 'src/app/shared/models/CartItem';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items: CartItem[] = new Array<CartItem>();
  price: number;
  constructor(public cartService: ShoppingCartService) {

  }


  ngOnInit() {
    this.items = this.cartService.read();
    this.price = this.cartService.getCartPrice();
  }

  summaryPrice() {

  }
}
