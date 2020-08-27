import { Component, OnInit, Input } from '@angular/core';
import { AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-upload-task',
  templateUrl: './upload-task.component.html',
  styleUrls: ['./upload-task.component.scss']
})
export class UploadTaskComponent implements OnInit {

  @Input() productId: string;
  @Input() file: File;

  task: AngularFireUploadTask;

  percentage: Observable<number>;

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.percentage = this.storageService.uploadFile(this.file, this.productId + "/" + new Date() + this.file.name);
  }

}
