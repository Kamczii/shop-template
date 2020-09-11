import { Injector } from '@angular/core';
import { Component, OnInit, forwardRef, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { DefaultValueAccessor, ControlValueAccessor, NG_VALUE_ACCESSOR, Validators, FormBuilder, FormGroup, NG_VALIDATORS, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ControlValueAccessorConnectorStaticTrue } from '../../control-value-accessor-connector-true';

@Component({
  selector: 'app-price-input',
  templateUrl: './price-input.component.html',
  styleUrls: ['./price-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR, useExisting: PriceInputComponent, multi: true
  }]
})
export class PriceInputComponent extends ControlValueAccessorConnectorStaticTrue {

  constructor(injector: Injector) {
    super(injector);
  }

  clearInput() {
    this.control.setValue('');
  }
}
