import { Component, OnInit, OnDestroy, forwardRef } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { Form, FormGroup, FormBuilder, Validators, ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PaymentComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PaymentComponent),
      multi: true,
    }
  ],
})
export class PaymentComponent implements ControlValueAccessor, OnDestroy {

  paymentForm: FormGroup;
  paymentMethods: string[] = ['Kurier pobranie', 'Przelew na konto'];

  subscriptions: Subscription[] = [];

  get value(): string {
    return this.paymentForm.controls['paymentMethod'].value;
  }

  set value(value: string) {
    this.paymentForm.controls['paymentMethod'].setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  constructor(private fb: FormBuilder) {
    this.paymentForm = this.fb.group({
      paymentMethod: ['', Validators.required]
    })
    this.subscriptions.push(
      this.paymentForm.valueChanges.subscribe(value => {
        this.onChange(value);
        this.onTouched();
      })
    );
  }

  onChange: any = () => { };
  onTouched: any = () => { };

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  writeValue(value) {
    if (value) {
      this.value = value;
    }

    if (value === null) {
      this.paymentForm.reset();
    }
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  validate(_: FormControl) {
    return this.paymentForm.valid ? null : { passwords: { valid: false, }, };
  }

  reset() {
    this.paymentForm.reset();
  }
}
