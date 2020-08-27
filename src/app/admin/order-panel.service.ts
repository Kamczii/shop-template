import { Injectable } from '@angular/core';
import { OrderService } from '../core/services/order.service';
import { Observable } from 'rxjs';
import { Order } from '../shared/models/Order';
import { BaseFilter } from '../shared/models/BaseFilter';
import { SortOrder } from '../shared/models/SortOrder';

@Injectable()
export class OrderPanelService {

  orders$: Observable<Order[]>;
  selectedOrder: Order = null;

  filters: BaseFilter[];
  sortOrders: SortOrder[];

  constructor(private orderService: OrderService) {
    this.getOrders();
  }

  setFilter(filters: BaseFilter[]) {
    this.filters = filters;
    this.getOrders();
  }

  setSortOrder(sortOrders: SortOrder[]) {
    this.sortOrders = sortOrders;
    this.getOrders();
  }

  getOrders() {
    this.orders$ = this.orderService.getAllOrders(this.filters, this.sortOrders);
  }

  updateOrder() {
    this.orderService.updateOrder(this.selectedOrder);
  }


  setStatusFilterValue(val: string) {
    this.filters.find(filter => filter.field = "status").value = val;
    this.getOrders();
  }

  getFilterStatusValue(): string {
    return this.filters.find(filter => filter.field = "status").value;
  }
}
