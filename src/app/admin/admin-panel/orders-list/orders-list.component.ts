import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OrderService } from 'src/app/core/services/order.service';
import { Observable } from 'rxjs';
import { Order } from 'src/app/shared/models/Order';
import { BaseFilter } from 'src/app/shared/models/BaseFilter';
import { FilterSymbol } from 'src/app/shared/enums/filter-symbol.enum';
import { OrderStatus } from 'src/app/shared/enums/order-staturs.enum';
import { SortOrder } from 'src/app/shared/models/SortOrder';
import { OrderDirection } from 'src/app/shared/enums/OrderDirection.enum';
import { OrderPanelService } from '../../order-panel.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

  constructor(public orderPanelService: OrderPanelService) { }

  ngOnInit() {
  }

  rowSelected(order: Order) {
    this.orderPanelService.selectedOrder = order;
  }

  setStatusFilterValue(val: string) {
    this.orderPanelService.setStatusFilterValue(val);
  }
}
