import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsPageComponent } from './products-page/products-page.component';
import { FiltersComponent } from './products-page/filters/filters.component';
import { ProductListComponent } from './products-page/product-list/product-list.component';
import { PaginationComponent } from './products-page/pagination/pagination.component';
import { ProductPreviewComponent } from './products-page/product-list/product-preview/product-preview.component';
import { ProductDetailsComponent } from './products-page/product-details/product-details.component';
import { ProductGalleryComponent } from './products-page/product-details/product-gallery/product-gallery.component';
import { ProductInfoComponent } from './products-page/product-details/product-info/product-info.component';
import { ShoppingCartButtonComponent } from './products-page/shopping-cart-button/shopping-cart-button.component';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule, MatPaginatorModule, MatRippleModule, MatButtonModule, MatChipsModule, MatExpansionModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductsPageComponent,
    FiltersComponent,
    ProductListComponent,
    PaginationComponent,
    ProductPreviewComponent,
    ProductDetailsComponent,
    ProductGalleryComponent,
    ProductInfoComponent,
    ShoppingCartButtonComponent,],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    MatCardModule,
    MatPaginatorModule,
    MatRippleModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatChipsModule,
    MatExpansionModule
  ]
})
export class ProductsModule { }
