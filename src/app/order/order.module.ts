import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { FinalizeOrderComponent } from './finalize-order/finalize-order.component';
import { ShippingComponent } from './finalize-order/shipping/shipping.component';
import { PaymentComponent } from './finalize-order/payment/payment.component';
import { MatStepperModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatListModule, MatTableModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    FinalizeOrderComponent,
    ShippingComponent,
    PaymentComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    SharedModule,
    CoreModule,
    MatButtonModule,
    MatRadioModule,
    FormsModule,
    MatIconModule,
    MatListModule,
    MatTableModule
  ]
})
export class OrderModule { }
