import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/core/services/product.service';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.scss']
})
export class ProductPreviewComponent implements OnInit, AfterViewInit {

  @Input() product: Product;
  images: Map<number, string> = new Map<number, string>();

  @ViewChild('wrapper',{static: false})
  wrapperRef: ElementRef;
  
  constructor(private storageService: StorageService) { }

  ngAfterViewInit(): void {
    let that = this;
    this.storageService.getImagesByProductId(this.product.id).subscribe(data => data.items.forEach(item => item.getDownloadURL().then(function (url) {
      that.images.set(+item.name, url);
      if(+item.name==1){that.wrapperRef.nativeElement.style.backgroundImage = 'url('+url+')';}
    })));
    
  }
  ngOnInit() {

  }

  over(el) {
    if (this.images.get(2))
      el.target.src = this.images.get(2);
  }

  out(el) {
    el.target.src = this.images.get(1);
  }
}
