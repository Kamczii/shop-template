import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/core/services/product.service';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.scss']
})
export class ProductPreviewComponent implements OnInit {

  @Input() product: Product;
  images: Map<number, string> = new Map<number, string>();

  constructor(private storageService: StorageService) { }
  ngOnInit() {

    let that = this;
    this.storageService.getImagesByProductId(this.product.id).subscribe(data => data.items.forEach(item => item.getDownloadURL().then(function (url) {
      that.images.set(+item.name, url);
    })));
  }

  over(el) {
    if (this.images.get(2))
      el.target.src = this.images.get(2);
  }

  out(el) {
    el.target.src = this.images.get(1);
  }
}
