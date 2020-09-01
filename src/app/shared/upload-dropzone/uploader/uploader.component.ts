import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { StorageService } from 'src/app/core/services/storage.service';
import { AngularFireUploadTask } from '@angular/fire/storage';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit, OnDestroy {

  eventSubscriptions: Subscription[] = [];
  @Input() productIdEvent: Observable<void>;
  @Input() resetEvent: Observable<void>;
  @Output() onChange = new EventEmitter<number>();

  isHovering: boolean;

  files: File[] = [];
  urls: [] = [];

  task: AngularFireUploadTask;

  constructor(private storageService: StorageService) { }
  
  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
      this.onChange.emit(this.files.length)
    }
  }

  uploadFiles(productId){
    let id = 0;
    for(let file of this.files){
      this.storageService.uploadFile(file,productId + "/" + new Date().getTime()+(++id))
      let reader = new FileReader();
      reader.onload = event => {
        
      }
    }
  }

  ngOnInit(): void {
    this.eventSubscriptions.push(this.productIdEvent.subscribe(val => this.uploadFiles(val)));
    this.eventSubscriptions.push(this.resetEvent.subscribe(() => this.files = []));
  }

  ngOnDestroy(): void {
    this.eventSubscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
