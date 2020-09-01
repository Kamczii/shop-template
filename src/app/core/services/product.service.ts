import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from 'src/app/shared/models/product';
import { map } from 'rxjs/internal/operators/map';
import { StorageService } from './storage.service';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class ProductService {
  constructor(private firestore: AngularFirestore, private storageService: StorageService) { }

  getAllProducts() {
    return this.firestore.collection<Product>('products').snapshotChanges().pipe(
      map(changes => {
        return changes.map(a => {
          let data = a.payload.doc.data() as Product;
          data.id = a.payload.doc.id;
          return data;
        });
      })
    );
  }

  getProductById(id: string) {
    return this.firestore.collection<Product>('products').doc(id).get().pipe(
      map(val => {
        let data = val.data() as Product;
        data.id = id;
        return data;
      })
    )
  }

  
  addProduct(value: Product) {
    return this.firestore.collection<Product>('products').add(value);
  }
}
