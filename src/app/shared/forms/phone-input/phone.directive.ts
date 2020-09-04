import { Directive, HostListener, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[phonemask]'
})
export class PhoneDirective implements OnInit{

  constructor(public ngControl: NgControl) { }

  ngOnInit(): void {
     const initialOnChange = (this.ngControl.valueAccessor as any).onChange;

    (this.ngControl.valueAccessor as any).onChange = (value) => initialOnChange(this.makeChangesToInput(value, false));
  }

  
  @HostListener('ngModelChange', ['$event'])
  onModelChange(event){
    this.ngControl.valueAccessor.writeValue(this.makeChangesToInput(event, false));
  }

  @HostListener('keydown.backspace', ['$event'])
  keydownBackspace(event){
    this.ngControl.control.setValue(this.makeChangesToInput(event, true));
  }

  makeChangesToInput(event, backspace){
    let newVal = event.replace(/\D/g, '');
    if (backspace && newVal.length <= 6) {
      newVal = newVal.substring(0, newVal.length - 1);
    }
    if (newVal.length === 0) {
      newVal = '';
    } else if (newVal.length <= 3) {
      newVal = newVal.replace(/^(\d{0,3})/, '$1');
    } else if (newVal.length <= 6) {
      newVal = newVal.replace(/^(\d{0,3})(\d{0,3})/, '$1-$2');
    } else if (newVal.length <= 9) {
      newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(\d{0,3})/, '$1-$2-$3');
    } else {
      newVal = newVal.substring(0, 9);
      newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(\d{0,3})/, '$1-$2-$3');
    }
    return newVal;
  }
}
