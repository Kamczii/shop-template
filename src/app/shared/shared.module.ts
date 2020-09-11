import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmButtonComponent } from './confirm-button/confirm-button.component';
import { LoginLogoutButtonComponent } from './login-logout-button/login-logout-button.component';
import { MatMenuModule, MatButtonModule, MatChipsModule, MatAutocompleteModule, MatIconModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatCardModule, MatProgressBarModule } from '@angular/material';
import { RouterModule } from '@angular/router';
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
import { EnumWithValuesToArrayPipe } from '../order/pipes/EnumWithValuesToArrayPipe';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner/loading-spinner.component';
import { DropzoneDirective } from './upload-dropzone/dropzone.directive';
import { UploaderComponent } from './upload-dropzone/uploader/uploader.component';
import { PriceInputComponent } from './forms/price-input/price-input.component';
import { SearchProductsInputComponent } from './search-products-input/search-products-input.component';
import { PhoneInputComponent } from './forms/phone-input/phone-input.component';
import { PhoneDirective } from './forms/phone-input/phone.directive';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { AddBrandComponent } from './forms/add-brand/add-brand.component';
import { FileToUploadComponent } from './upload-dropzone/uploader/file-to-upload/file-to-upload.component';
import { CategoryFormComponent } from './forms/category-input/category-form.component';
import { BrandFormComponent } from './forms/brand-select/brand-select.component';
import { BrandFilterComponent } from './forms/brand-filter/brand-filter.component';



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
    SnackbarComponent,
    EnumWithValuesToArrayPipe,
    LoadingSpinnerComponent,
    DropzoneDirective,
    UploaderComponent,
    PriceInputComponent,
    SearchProductsInputComponent,
    PhoneInputComponent,
    PhoneDirective,
    OrderSummaryComponent,
    AddBrandComponent,
    FileToUploadComponent,
    CategoryFormComponent,
    BrandFilterComponent
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
    MatProgressBarModule,
  ],
  exports: [LoginLogoutButtonComponent, ConfirmButtonComponent, BrandFormComponent,
    PriceFormComponent,
    SizeFormComponent, OneSizeFormComponent, EnumToArrayPipe, HeaderComponent, PriceComponent, AddressFormComponent,
    PasswordInputComponent,CategoryFormComponent,
    EmailInputComponent, AddressComponent, OrderComponent, SnackbarComponent, BrandFilterComponent, EnumWithValuesToArrayPipe, LoadingSpinnerComponent, AddBrandComponent, OrderSummaryComponent, UploaderComponent, PriceInputComponent, SearchProductsInputComponent,PhoneInputComponent]
})
export class SharedModule { }
