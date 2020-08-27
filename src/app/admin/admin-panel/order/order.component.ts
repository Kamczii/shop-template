import { Component, OnInit, Input } from '@angular/core';
import { Order } from 'src/app/shared/models/Order';
import { OrderStatus } from 'src/app/shared/enums/order-staturs.enum';
import { OrderPanelService } from '../../order-panel.service';

@Component({
  selector: 'app-order-display',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  @Input() order: Order;
  constructor(private orderPanelService: OrderPanelService) { }

  ngOnInit() {

  }

  changeStatus() {
    this.orderPanelService.updateOrder();
  }
}
