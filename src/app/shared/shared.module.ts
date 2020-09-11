import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatButtonModule, MatCardModule, MatChipsModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatProgressBarModule, MatSelectModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { EnumToArrayPipe } from '../order/pipes/enumToArrayPipe';
import { EnumWithValuesToArrayPipe } from '../order/pipes/EnumWithValuesToArrayPipe';
import { AddressComponent } from './address/address.component';
import { ConfirmButtonComponent } from './confirm-button/confirm-button.component';
import { AddBrandComponent } from './forms/add-brand/add-brand.component';
import { AddressFormComponent } from './forms/address-form/address-form.component';
import { BrandFilterComponent } from './forms/filters/brand-filter/brand-filter.component';
import { PriceFilterComponent } from './forms/filters/price-filter/price-filter.component';
import { BrandFormComponent } from './forms/inputs/brand-select/brand-select.component';
import { CategorySelectComponent } from './forms/inputs/category-select/category-select.component';
import { EmailInputComponent } from './forms/inputs/email-input/email-input.component';
import { PasswordInputComponent } from './forms/inputs/password-input/password-input.component';
import { PhoneInputComponent } from './forms/inputs/phone-input/phone-input.component';
import { PhoneDirective } from './forms/inputs/phone-input/phone.directive';
import { PriceInputComponent } from './forms/inputs/price-input/price-input.component';
import { OneSizeFormComponent } from './forms/one-size-form/one-size-form.component';
import { SizeFormComponent } from './forms/size-form/size-form.component';
import { HeaderComponent } from './header/header.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner/loading-spinner.component';
import { LoginLogoutButtonComponent } from './login-logout-button/login-logout-button.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { OrderComponent } from './order/order.component';
import { PriceComponent } from './price/price.component';
import { SearchProductsInputComponent } from './search-products-input/search-products-input.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { DropzoneDirective } from './upload-dropzone/dropzone.directive';
import { FileToUploadComponent } from './upload-dropzone/uploader/file-to-upload/file-to-upload.component';
import { UploaderComponent } from './upload-dropzone/uploader/uploader.component';
import { PriceDirective } from './directives/price.directive';



@NgModule({
  declarations: [
    ConfirmButtonComponent,
    LoginLogoutButtonComponent,
    BrandFormComponent,
    PriceFilterComponent,
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
    CategorySelectComponent,
    BrandFilterComponent,
    PriceDirective
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
    PriceFilterComponent,
    SizeFormComponent, OneSizeFormComponent, EnumToArrayPipe, HeaderComponent, PriceComponent, AddressFormComponent,
    PasswordInputComponent,CategorySelectComponent,
    EmailInputComponent, AddressComponent, OrderComponent, SnackbarComponent, BrandFilterComponent, EnumWithValuesToArrayPipe, LoadingSpinnerComponent, AddBrandComponent, OrderSummaryComponent, UploaderComponent, PriceInputComponent, SearchProductsInputComponent,PhoneInputComponent]
})
export class SharedModule { }
