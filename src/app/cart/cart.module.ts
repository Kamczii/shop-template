import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart/cart.component';
import { CartListTableComponent } from './cart/cart-list-table/cart-list-table.component';
import { CartItemComponent } from './cart/cart-list-table/cart-item/cart-item.component';
import { SummaryComponent } from './cart/summary/summary.component';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule, MatDividerModule, MatIconModule, MatFormFieldModule, MatSelectModule, MatButtonModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CartComponent,
    SummaryComponent,
    CartListTableComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class CartModule { }
