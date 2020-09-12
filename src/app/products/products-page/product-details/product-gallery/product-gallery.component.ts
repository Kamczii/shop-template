import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.scss']
})
export class ProductGalleryComponent implements OnInit {

  @Input() imageURLs: Map<number, string> = new Map<number, string>();
  constructor() { }

  ngOnInit() {
  }

}
