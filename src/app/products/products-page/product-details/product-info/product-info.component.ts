import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartItem } from 'src/app/shared/models/CartItem';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart.service';
import { Sizes } from 'src/app/shared/enums/sizes.enum';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {

  @Input() product: Product;

  productForm: FormGroup;
  availableSizes: Sizes[] = [];

  constructor(private fb: FormBuilder, private cartService: ShoppingCartService) {
    this.productForm = this.fb.group({
      product: ['', Validators.required],
      size: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.productForm.controls['product'].setValue(this.product);
    this.product.sizes.forEach(size => {
      if(size.count>0) 
        this.availableSizes.push(size.size)
    })
  }

  addToCart() {
    if(this.productForm.invalid) return;
    let cartItem = new CartItem();
    cartItem.product = this.productForm.controls['product'].value;
    cartItem.size = this.productForm.controls['size'].value.size;
    this.cartService.add(cartItem);
  }

}
