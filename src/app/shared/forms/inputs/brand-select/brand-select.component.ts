import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter, Input, Injector } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatAutocomplete, MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';
import { startWith, map } from 'rxjs/operators';
import { ProductService } from 'src/app/core/services/product.service';
import { ControlValueAccessorConnectorStaticFalse } from '../../control-value-accessor-connector-false';

@Component({
  selector: 'app-brand-select',
  templateUrl: './brand-select.component.html',
  styleUrls: ['./brand-select.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR, useExisting: BrandFormComponent, multi: true
  }]
})
export class BrandFormComponent  extends ControlValueAccessorConnectorStaticFalse implements OnInit {

  brandList$: Observable<string[]>;

  constructor(injector: Injector, private productService: ProductService) {
    super(injector);
  }

  clearInput() {
    this.control.setValue('');
  }

  ngOnInit() {
    this.brandList$ = this.productService.getAllBrands();
  }
}
