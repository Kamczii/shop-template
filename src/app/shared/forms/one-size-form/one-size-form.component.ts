import { Component, OnInit, Pipe, PipeTransform, forwardRef, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor } from '@angular/forms';
import { Sizes } from '../../enums/sizes.enum';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-one-size-form',
  templateUrl: './one-size-form.component.html',
  styleUrls: ['./one-size-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => OneSizeFormComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => OneSizeFormComponent),
      multi: true,
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OneSizeFormComponent implements ControlValueAccessor, OnDestroy{

  sizeForm: FormGroup;
  subscriptions: Subscription[] = [];

  sizeList = Sizes;

  get value(): String {
    return this.sizeForm.value;
  }

  set value(value: String) {
    this.sizeForm.controls.size.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  constructor(private fb: FormBuilder) {
    this.sizeForm = this.fb.group({
      size: ['',Validators.required]
    });
    this.subscriptions.push(
      this.sizeForm.valueChanges.subscribe(value => {
        this.onChange(value);
        this.onTouched();
      })
    );
   }

   ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  registerOnChange(fn) {
    this.onChange = fn;
  }

  writeValue(value) {
    if (value) {
      this.value = value;
    }

    if (value === null) {
      this.sizeForm.reset();
    }
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  validate(_: FormControl) {
    return this.sizeForm.valid ? null : { valid: false };
  }

  reset() {
    this.sizeForm.reset();
  }
  
}
