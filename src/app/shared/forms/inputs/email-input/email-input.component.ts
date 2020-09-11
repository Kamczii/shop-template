import { Component, OnInit, forwardRef, ChangeDetectionStrategy, OnDestroy, Injector } from '@angular/core';
import { FormGroup, Validators, FormBuilder, NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { isObject } from 'util';
import { ControlValueAccessorConnectorStaticTrue } from '../../control-value-accessor-connector-true';

@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmailInputComponent),
      multi: true
    }]
})

export class EmailInputComponent extends ControlValueAccessorConnectorStaticTrue {

  constructor(injector: Injector) {
    super(injector);
  }

  clearInput() {
    this.control.setValue('');
  }
}
