import { Component, OnInit, forwardRef, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { DefaultValueAccessor, ControlValueAccessor, NG_VALUE_ACCESSOR, Validators, FormBuilder, FormGroup, NG_VALIDATORS, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-price-input',
  templateUrl: './price-input.component.html',
  styleUrls: ['./price-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PriceInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PriceInputComponent),
      multi: true,
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriceInputComponent implements ControlValueAccessor, OnDestroy {

  price: FormControl;
  subscriptions: Subscription[] = [];

  get control() {
    return this.price;
  }

  get value(): String {
    return this.control.value.price;
  }

  set value(value: String) {
    this.control.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  constructor(private fb: FormBuilder) {
    this.price = new FormControl();
    this.subscriptions.push(
      this.price.valueChanges.subscribe(value => {
        this.onChange(value);
        this.onTouched();
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  onChange: any = () => { };
  onTouched: any = () => { };

  registerOnChange(fn) {
    this.onChange = fn;
  }

  writeValue(value) {
    if (value) {
      this.value = value;
    }

    if (value === null) {
      this.price.reset();
    }
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  validate(_: FormControl) {
    return this.price.valid ? null : { valid: false };
  }

  reset() {
    this.price.reset();
  }

  validatePrice(){
    
  }
}
