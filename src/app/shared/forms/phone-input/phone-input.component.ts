import { Component, OnInit, OnDestroy, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { isObject } from 'util';

@Component({
  selector: 'app-phone-input',
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhoneInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PhoneInputComponent),
      multi: true,
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhoneInputComponent implements OnDestroy, OnDestroy {

  form: FormGroup;
  subscriptions: Subscription[] = [];

  get control() {
    return this.form.controls['phone'];
  }

  get value(): String {
    return this.form.controls['phone'].value;
  }

  set value(value: String) {
    this.form.controls['phone'].setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      phone: ['', [Validators.required,  Validators.pattern('^[0-9]{3}-[0-9]{3}-[0-9]{3}')]]
    });
    this.subscriptions.push(
      this.form.valueChanges.subscribe(value => {
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

    if (value === null || isObject(value)) {
      this.form.reset();
    }
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  validate(_: FormControl) {
    return this.form.valid ? null : { valid: false };
  }

  reset() {
    this.form.reset();
  }
}
