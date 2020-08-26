import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatBadgeModule, MatButtonModule } from  '@angular/material';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FlexLayoutModule} from "@angular/flex-layout";
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { OrderModule } from './order/order.module';
import { ProductService } from './core/services/product.service';
import { ShoppingCartService } from './core/services/shopping-cart.service';
import { ProfileModule } from './profile/profile.module';
import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatIconModule,
    MatBadgeModule,
    MatListModule,
    MatButtonModule,
    CoreModule,
    SharedModule,
    OrderModule,
    ProfileModule,
    CartModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }