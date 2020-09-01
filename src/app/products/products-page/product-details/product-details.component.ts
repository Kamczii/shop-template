import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/shared/models/product';
import { Observable } from 'rxjs/internal/Observable';
import { switchMap } from 'rxjs/operators';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product$: Observable<Product>;
  images$: Observable<any>;

  images: string[] = [];

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private storageService: StorageService) {

  }

  ngOnInit() {
    this.product$ = this.activatedRoute.params.pipe(
      switchMap((params) => this.productService.getProductById(params['id']))
    );

    this.images$ = this.activatedRoute.params.pipe(
      switchMap((params) => this.storageService.getImagesByProductId(params['id'])),
    );

    let that = this;
    this.images$.subscribe(data=>data.items.forEach(item => console.log(item.getDownloadURL().then(function(url){
      that.images.push(url);
    }))));
  }

}
