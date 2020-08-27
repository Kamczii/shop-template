import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Order } from 'src/app/shared/models/Order';
import { AuthService } from './auth.service';
import { map, take, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { ShoppingCartService } from './shopping-cart.service';
import { BaseFilter } from 'src/app/shared/models/BaseFilter';
import { FilterSymbol } from 'src/app/shared/enums/filter-symbol.enum';
import { SortOrder } from 'src/app/shared/models/SortOrder';


@Injectable()
export class OrderService {

  ordersRef: AngularFirestoreCollection<Order>;

  constructor(private firestore: AngularFirestore, private authService: AuthService, private cartService: ShoppingCartService) {
    this.ordersRef = this.firestore.collection<Order>('orders');

  }

  makeOrder(order) {
    return this.ordersRef.add(order)
  }

  getAllOrders(filter?: BaseFilter[], order?: SortOrder[]) {
    return this.firestore.collection('orders', ref => {
      let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
      if (filter)
        filter.forEach(filter => {
          query = query.where(filter.field, filter.symbol, filter.value);
        })
      if (order)
        order.forEach(order => {
          query = query.orderBy(order.field, order.order)
        })
      return query;
    }).snapshotChanges().pipe(
      map(changes => {
        return changes.map(a => {
          let data = a.payload.doc.data() as Order;
          data.id = a.payload.doc.id;
          return data;
        })
      })
    );
  }

  getUserOrders() {
    return this.authService.user$.pipe(
      switchMap(({ uid }) => {
        return this.firestore.collection('orders', ref =>
          ref.where("purchaserId", "==", uid)).snapshotChanges().pipe(
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


  updateOrder(selectedOrder: Order) {
    this.firestore.collection('orders').doc(selectedOrder.id).update(selectedOrder);
  }
}
