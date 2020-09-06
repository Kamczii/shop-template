import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { StorageService } from 'src/app/core/services/storage.service';
import { AngularFireUploadTask } from '@angular/fire/storage';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss'],
  
})
export class UploaderComponent implements OnInit, OnDestroy {

  eventSubscriptions: Subscription[] = [];
  @Input() productIdEvent: Observable<void>;
  @Input() resetEvent: Observable<void>;
  @Output() onChange = new EventEmitter<number>();

  isHovering: boolean;

  files: File[] = [];
  urls = [];

  task: AngularFireUploadTask;

  constructor(private storageService: StorageService, private productService: ProductService) { }
  
  toggleHover(event: boolean) {
    this.isHovering = event;
  }
  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
      this.onChange.emit(this.files.length)

      var reader = new FileReader();

      reader.readAsDataURL(files.item(i)); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed=
        this.urls.push({name: files.item(i).name, url: reader.result});
      }
    }
  }

  uploadFiles(productId){
    let id = 1;
    for(let file of this.files){
      console.log(file);
      this.storageService.uploadFile(file,"productId" + "/"+(id++)).then((data) => {
        data.ref.getDownloadURL().then(url => {console.log(url);this.productService.addImageToProduct(productId, id,url)});
      });
    }
  }

  ngOnInit(): void {
    this.eventSubscriptions.push(this.productIdEvent.subscribe(val => this.uploadFiles(val)));
    this.eventSubscriptions.push(this.resetEvent.subscribe(() => this.files = []));
  }

  ngOnDestroy(): void {
    this.eventSubscriptions.forEach(subscription => subscription.unsubscribe());
  }

  delete(image): void {
    let index = this.urls.findIndex((current) => {
      return current === image
    });
    this.urls.splice(index, 1);
    let index2 = this.files.findIndex((current) => {
      return current.name === image.name
    })
    this.files.splice(index2, 1);
  }
}
