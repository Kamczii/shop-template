import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.scss']
})
export class ProductPreviewComponent implements OnInit {

  @Input() product: Product;

  constructor() { }

  ngOnInit() {

  }

}
