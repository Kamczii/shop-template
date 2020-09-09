import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Product } from 'src/app/shared/models/product';
import { map } from 'rxjs/internal/operators/map';
import { StorageService } from './storage.service';
import { switchMap, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BaseFilter } from 'src/app/shared/models/BaseFilter';
import { firestore } from 'firebase';

@Injectable()
export class ProductService {
  constructor(private firestore: AngularFirestore, private storageService: StorageService) { }

  getAllProducts(limit: number, filters?: BaseFilter []): Observable<Product[]> {

    return this.firestore.collection<Product>('products', ref => {
      let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
      if(filters){for (let filter of filters){
        query = query.where(filter.field,filter.symbol,filter.value);
      }}
      if(limit) query = query.limit(limit);
      return query;
    }).snapshotChanges().pipe(
      map(changes => {
        return changes.map(a => {
          let data = a.payload.doc.data() as Product;
          data.id = a.payload.doc.id;
          return data;
        });
      })
    );
  }

  getProductById(id: string): Observable<Product> {
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

  
  addImageToProduct(productId: string, imageId: number, downloadURL: string) {
      this.firestore.collection('products').doc(productId).update({imageURLs: firestore.FieldValue.arrayUnion({key: imageId, value: downloadURL})}).catch(error => console.log(error));
  }

  addBrand(value: string){
    return this.firestore.collection<{name: string}>('brands').add({name: value});
  }
  getAllBrands() {
    return this.firestore.collection<{name: string}>('brands').valueChanges().pipe(map((value) => value.map((brand) => brand.name)));
  }
}
