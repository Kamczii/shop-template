import {ControlContainer, ControlValueAccessor, FormControl, FormControlDirective} from '@angular/forms';
import {Injector, Input, ViewChild} from '@angular/core';

export class ControlValueAccessorConnector implements ControlValueAccessor {
  @ViewChild(FormControlDirective, {static: true})
  formControlDirective: FormControlDirective;

  @Input()
  formControl: FormControl;

  @Input()
  formControlName: string;

  get control() {
    return this.formControl || this.controlContainer.control.get(this.formControlName);
  }

  constructor(private injector: Injector) {
  }

  get controlContainer() {
    return this.injector.get(ControlContainer);
  }

  registerOnTouched(fn: any): void {
    this.formControlDirective.valueAccessor.registerOnTouched(fn);
  }

  registerOnChange(fn: any): void {
    this.formControlDirective.valueAccessor.registerOnChange(fn);
  }

  writeValue(obj: any): void {
    this.formControlDirective.valueAccessor.writeValue(obj);
  }

  setDisabledState(isDisabled: boolean): void {
    this.formControlDirective.valueAccessor.setDisabledState(isDisabled);
  }
}
