import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.scss']
})
export class ProductGalleryComponent implements OnInit {

  @Input() imageURLs: Map<number, string> = new Map<number, string>();

  fullScreenEnabled = false;
  currentKey = 0;

  @ViewChild('background', { static: false })
  backgroundRef: ElementRef;
  @ViewChild('backgroundImage', { static: false })
  backgroundImageRef: ElementRef;


  @ViewChild('image', { static: false })
  imageRef: ElementRef;
  @ViewChild('imageContainer', { static: false })
  imageContainerRef: ElementRef;

  constructor() { }


  ngOnInit() {

  }

  openFullScreen(key: number) {
    this.currentKey = key;
    this.setImage(key);
    this.fullScreenEnabled = true;
    this.makeFullPageVisible();
  }

  closeFullScreen() {
    this.fullScreenEnabled = false;
    this.makeFullPageInvisible();
  }

  makeFullPageVisible() {
    this.backgroundRef.nativeElement.style.visibility = 'visible';
    this.imageContainerRef.nativeElement.style.visibility = 'visible';
  }

  makeFullPageInvisible() {
    this.backgroundRef.nativeElement.style.visibility = 'hidden';
    this.imageContainerRef.nativeElement.style.visibility = 'hidden';
  }

  nextImage() {
    this.currentKey++;
    if (this.currentKey > this.imageURLs.size)
      this.currentKey = 1;
    this.setImage(this.currentKey);
  }

  previousImage() {
    this.currentKey--;
    if (this.currentKey < 1)
      this.currentKey = 1;
    this.setImage(this.currentKey);
  }


  setImage(key) {
    this.imageRef.nativeElement.src = this.imageURLs.get(key);
    this.backgroundImageRef.nativeElement.style.backgroundImage = 'url(' + this.imageURLs.get(key) + ')';
  }
}
