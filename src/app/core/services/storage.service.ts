import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { map } from 'rxjs/operators';

@Injectable()
export class StorageService {

  constructor(private storage: AngularFireStorage, private db: AngularFirestore) { }

  uploadFile(file: File, path: string) {
    let task = this.storage.upload(path, file);
    return task;
  }

  getImagesByProductId(productId: string){
    return this.storage.ref(productId+'/').listAll();
  }

}
