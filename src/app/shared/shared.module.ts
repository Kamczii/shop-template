import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmButtonComponent } from './confirm-button/confirm-button.component';
import { LoginLogoutButtonComponent } from './login-logout-button/login-logout-button.component';
import { MatMenuModule, MatButtonModule, MatChipsModule, MatAutocompleteModule, MatIconModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatCardModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { BrandFormComponent } from './forms/brand-form/brand-form.component';
import { PriceFormComponent } from './forms/price-form/price-form.component';
import { SizeFormComponent } from './forms/size-form/size-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OneSizeFormComponent } from './forms/one-size-form/one-size-form.component';
import { EnumToArrayPipe } from '../order/pipes/enumToArrayPipe';
import { HeaderComponent } from './header/header.component';
import { PriceComponent } from './price/price.component';
import { AddressFormComponent } from './forms/address-form/address-form.component';
import { PasswordInputComponent } from './forms/password-input/password-input.component';
import { EmailInputComponent } from './forms/email-input/email-input.component';
import { AddressComponent } from './address/address.component';
import { OrderComponent } from './order/order.component';
import { SnackbarComponent } from './snackbar/snackbar.component';



@NgModule({
  declarations: [
    ConfirmButtonComponent,
    LoginLogoutButtonComponent,
    BrandFormComponent,
    PriceFormComponent,
    SizeFormComponent,
    OneSizeFormComponent,
    EnumToArrayPipe,
    HeaderComponent,
    PriceComponent,
    AddressFormComponent,
    PasswordInputComponent,
    EmailInputComponent,
    AddressComponent,
    OrderComponent,
    SnackbarComponent
],
  imports: [
    CommonModule,
    MatMenuModule,
    RouterModule,
    MatButtonModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
  ],
  exports: [LoginLogoutButtonComponent, ConfirmButtonComponent,BrandFormComponent,
    PriceFormComponent,
    SizeFormComponent,OneSizeFormComponent, EnumToArrayPipe,HeaderComponent, PriceComponent, AddressFormComponent,
    PasswordInputComponent,
    EmailInputComponent,AddressComponent,OrderComponent, SnackbarComponent]
})
export class SharedModule { }