
import { Component, OnInit, OnDestroy, forwardRef, ChangeDetectionStrategy,Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { isObject } from 'util';
import { ControlValueAccessorConnector } from '../control-value-accessor-connector';

@Component({
  selector: 'app-phone-input',
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhoneInputComponent),
      multi: true
    }
  ]
})
export class PhoneInputComponent extends ControlValueAccessorConnector {

  constructor(injector: Injector) {
    super(injector);
  }

  clearInput() {
    this.control.setValue('');
  }
}
