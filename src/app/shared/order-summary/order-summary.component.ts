import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../models/Order';
import { CartItem } from '../models/CartItem';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {

  @Input() order: Order;
  @Input() items: CartItem[];

  constructor() { }

  ngOnInit() {
  }

}
