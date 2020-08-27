import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/shared/models/product';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts()
  }

  getProducts() {
    this.products$ = this.productService.getAllProducts();
  }
}
