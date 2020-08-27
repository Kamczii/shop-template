import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OrderStatus } from 'src/app/shared/enums/order-staturs.enum';
import { ControlValueAccessor } from '@angular/forms';
import { MatSelectChange } from '@angular/material';

@Component({
  selector: 'app-status-form',
  templateUrl: './status-form.component.html',
  styleUrls: ['./status-form.component.scss']
})
export class StatusFormComponent {

  @Input() value: string;
  @Output() onChange = new EventEmitter<string>();

  OrderStatus = OrderStatus;

  constructor() { }

  changed() {
    this.onChange.emit(this.value);
  }

}
