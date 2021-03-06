import { ControlContainer, ControlValueAccessor, FormControl, FormControlDirective } from '@angular/forms';
import { Injector, Input, ViewChild } from '@angular/core';

export class ControlValueAccessorConnectorStaticFalse implements ControlValueAccessor {

  @ViewChild(FormControlDirective, { static: false })
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
    if (this.formControlDirective) { this.formControlDirective.valueAccessor.registerOnTouched(fn) };
  }

  registerOnChange(fn: any): void {
    if (this.formControlDirective) { this.formControlDirective.valueAccessor.registerOnChange(fn); }
  }

  writeValue(obj: any): void {
    if (this.formControlDirective) { this.formControlDirective.valueAccessor.writeValue(obj) };
  }

  setDisabledState(isDisabled: boolean): void {
    this.formControlDirective.valueAccessor.setDisabledState(isDisabled);
  }
}
