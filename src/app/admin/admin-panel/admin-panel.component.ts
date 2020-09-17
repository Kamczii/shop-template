import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/core/services/order.service';
import { OrderPanelService } from '../order-panel.service';
import { BaseFilter } from 'src/app/shared/models/BaseFilter';
import { FilterSymbol } from 'src/app/shared/enums/filter-symbol.enum';
import { OrderStatus } from 'src/app/shared/enums/order-staturs.enum';
import { SortOrder } from 'src/app/shared/models/SortOrder';
import { OrderDirection } from 'src/app/shared/enums/OrderDirection.enum';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss'],
  providers: [OrderPanelService]
})
export class AdminPanelComponent implements OnInit {

  currentId: string = null;

  constructor(public OrderPanelService: OrderPanelService) { }

  ngOnInit() {

    let filter = <BaseFilter>{};
    filter.field = "status";
    filter.symbol = FilterSymbol.eq;
    filter.value = OrderStatus.O;
    let sortOrders = <SortOrder>{};
    sortOrders.field = 'date';
    sortOrders.order = OrderDirection.ASC;

    this.OrderPanelService.setFilter([filter]);
    this.OrderPanelService.setSortOrder([sortOrders]);
  }

  selectRow(id: string) {
    this.currentId = id;
  }
}
