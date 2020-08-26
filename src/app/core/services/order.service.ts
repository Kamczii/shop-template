import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Order } from 'src/app/shared/models/Order';
import { AuthService } from './auth.service';
import { map, take, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { ShoppingCartService } from './shopping-cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  ordersRef: AngularFirestoreCollection<Order>;
  
  constructor(private firestore: AngularFirestore, private authService: AuthService, private cartService: ShoppingCartService) {
    this.ordersRef = this.firestore.collection<Order>('orders');

  }

  makeOrder(order){
    return this.ordersRef.add(order)
  }

  getUserOrders() {
   return this.authService.user$.pipe(
     switchMap(({uid}) => {
      return this.firestore.collection('orders', ref => 
      ref.where("purchaserId","==", uid)).snapshotChanges().pipe(
        map(changes => {
          return changes.map(a => {
            let data = a.payload.doc.data() as Order;
            data.id = a.payload.doc.id;
            return data;
          });
        })
      );
     })
   );
  }

}
