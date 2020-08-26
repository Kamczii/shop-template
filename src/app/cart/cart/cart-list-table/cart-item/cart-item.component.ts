import { Component, OnInit, Input } from '@angular/core';
import { Sizes } from 'src/app/shared/enums/sizes.enum';
import { Product } from 'src/app/shared/models/product';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart.service';
import { CartItem } from 'src/app/shared/models/CartItem';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  sizes = Sizes;
  @Input() item: CartItem;
  constructor(private cartService: ShoppingCartService) { }

  ngOnInit() {
    
  }

  remove(){
    this.cartService.remove(this.item);
  }

  changeSize(size){
    this.cartService.changeItemSize(this.item, size);
  }

  changeCount(count){
    this.cartService.changeItemCount(this.item, count);
  }
}
