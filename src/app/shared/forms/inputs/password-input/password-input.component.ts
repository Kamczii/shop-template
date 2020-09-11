import { Component, OnInit, forwardRef, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormBuilder, ValidationErrors, ControlValueAccessor } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { Subscription } from 'rxjs/internal/Subscription';
import { PatternValidation } from 'src/app/shared/validation/pattern-validation';



export interface PasswordFormValues {
  password: string;
  confirmPassword: string;
}

export function matchingInputsValidator(firstKey: string, secondKey: string) {
  return function (group: FormGroup): ValidationErrors | undefined {
    if (group.controls[firstKey].value !== group.controls[secondKey].value) {
      return {
        'missmatch': true
      };
    }
  };
}
@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true,
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PasswordInputComponent implements ControlValueAccessor {

  form: FormGroup;
  subscriptions: Subscription[] = [];

  @Input() minLength: number = 0;
  @Input() maxLength: number = 20;

  get value(): PasswordFormValues {
    return this.form.value;
  }

  set value(value: PasswordFormValues) {
    this.form.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  get passwordControl() {
    return this.form.controls.password;
  }

  get confirmPasswordControl() {
    return this.form.controls.confirmPassword;
  }

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      password: ['', [Validators.required,
      Validators.minLength(this.minLength),
      Validators.maxLength(this.maxLength),
      // 1. Password Field is Required
      Validators.required,
      // 2. check whether the entered password has a number
      PatternValidation.patternValidator(/\d/, { hasNumber: true }),
      // 3. check whether the entered password has upper case letter
      PatternValidation.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
      // 4. check whether the entered password has a lower-case letter
      PatternValidation.patternValidator(/[a-z]/, { hasSmallCase: true }),]],
      confirmPassword: ['', Validators.required]
    }, { validator: matchingInputsValidator('password', 'confirmPassword') });

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

    if (value === null) {
      this.form.reset();
    }
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  validate(_: FormControl) {
    return this.form.valid ? null : { passwords: { valid: false, }, };
  }

  reset() {
    this.form.reset();
  }
}
