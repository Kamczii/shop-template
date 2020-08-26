import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/shared/models/product';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productId: string;
  product$: Observable<Product>; 

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService){ 
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    this.product$ = this.productService.getProductById(this.productId);
  }

  ngOnInit() {
  }

}
