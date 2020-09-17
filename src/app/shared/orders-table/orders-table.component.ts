import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Order } from '../models/Order';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss']
})
export class OrdersTableComponent implements OnInit {
  @Input() orders: Order[];
  @Output() rowSelected = new EventEmitter<Order>();

  constructor() { }

  ngOnInit() {
  }

  rowSelect(order: Order) {
    this.rowSelected.emit(order);
  }
}
