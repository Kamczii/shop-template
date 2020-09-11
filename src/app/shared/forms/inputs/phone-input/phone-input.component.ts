
import { Component, OnInit, OnDestroy, forwardRef, ChangeDetectionStrategy,Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ControlValueAccessorConnectorStaticTrue } from '../../control-value-accessor-connector-true';

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
export class PhoneInputComponent extends ControlValueAccessorConnectorStaticTrue {

  constructor(injector: Injector) {
    super(injector);
  }

  clearInput() {
    this.control.setValue('');
  }
}
