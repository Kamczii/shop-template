import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/shared/models/product';
import { Observable } from 'rxjs/internal/Observable';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product$: Observable<Product>;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) {

  }

  ngOnInit() {
    this.product$ = this.activatedRoute.params.pipe(
      switchMap((params) => this.productService.getProductById(params['id']))
    );
  }

}
