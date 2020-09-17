import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { MatListModule, MatButtonModule, MatSelectModule, MatSidenavModule, MatCardModule, MatBadgeModule, MatInputModule, MatChipsModule, MatIconModule, MatStepperModule, MatSnackBarModule, MatTableModule, MatAutocompleteModule } from '@angular/material';
import { OrdersListComponent } from './admin-panel/orders-list/orders-list.component';
import { OrderComponent } from './admin-panel/order/order.component';
import { StatusFormComponent } from './admin-panel/orders-list/status-form/status-form.component';
import { AddProductComponent } from './admin-panel/add-product/add-product.component';
import { ProductFormComponent } from './admin-panel/add-product/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminPanelComponent, OrdersListComponent, OrderComponent, StatusFormComponent, AddProductComponent, ProductFormComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MatListModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatSelectModule,
    MatBadgeModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    MatStepperModule,
    MatSnackBarModule,
    MatTableModule,
    MatAutocompleteModule,
  ]
})
export class AdminModule { }
