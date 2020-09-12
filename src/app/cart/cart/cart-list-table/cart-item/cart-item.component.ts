import { Component, OnInit, Input } from '@angular/core';
import { Sizes } from 'src/app/shared/enums/sizes.enum';
import { Product } from 'src/app/shared/models/product';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart.service';
import { CartItem } from 'src/app/shared/models/CartItem';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  sizes: Sizes[] = [];
  @Input() item: CartItem;
  images: Map<number, string> = new Map<number, string>();
  constructor(private cartService: ShoppingCartService, private storageService: StorageService) { }

  ngOnInit() {
    let that = this;
    this.storageService.getImagesByProductId(this.item.product.id).subscribe(data => data.items.forEach(item => item.getDownloadURL().then(function (url) {
      that.images.set(+item.name, url);
    })));

    this.item.product.sizes.forEach(size => {
      if (size.count > 0)
        this.sizes.push(size.size)
    })
  }

  remove() {
    this.cartService.remove(this.item);
  }

  changeSize(size) {
    this.cartService.changeItemSize(this.item, size);
  }

  changeCount(count) {
    this.cartService.changeItemCount(this.item, count);
  }
}
