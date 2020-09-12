import { ElementRef } from '@angular/core';
import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[priceMask]'
})
export class PriceDirective {

  constructor(public ngControl: NgControl) { }

  ngOnInit(): void {
    const initialOnChange = (this.ngControl.valueAccessor as any).onChange;

    (this.ngControl.valueAccessor as any).onChange = (value) => initialOnChange(this.makeChangesToInput(value, false));
  }


  @HostListener('ngModelChange', ['$event'])
  onModelChange(event) {
    this.ngControl.valueAccessor.writeValue(this.makeChangesToInput(event, false));
  }

  @HostListener('keydown.backspace', ['$event'])
  keydownBackspace(event) {
    this.ngControl.control.setValue(this.makeChangesToInput(event, true));
  }

  @HostListener('blur') onblur() {
    this.ngControl.control.setValue(this.deleteLastDot(this.ngControl.control.value));
  }

  makeChangesToInput(event, backspace) {
    let newVal: String;
    if (backspace) {
      newVal = event.target.value.substring(0, event.target.value.length);
    }
    else {
      newVal = event.replace(/[,]/g, '.');
      newVal = newVal.replace(/[^0-9,\.]/, '');


      let count = (newVal.match(/[.]/g) || []).length;

      while (count > 1) {
        let index = newVal.lastIndexOf('.');
        newVal = newVal.substring(0, index);
        count = (newVal.match(/[.]/g) || []).length;
      }

      let index = newVal.indexOf('.');
      if (index > -1)
        newVal = newVal.substring(0, index + 3)


      while (newVal.charAt(newVal.length - 1) == '.' && newVal.charAt(newVal.length - 2) == '.') {
        newVal = newVal.substring(0, newVal.length - 1)
      }

    }
    return newVal;
  }

  deleteLastDot(event: String) {
    while (event.charAt(event.length - 1) == '.')
      event = event.substring(0, event.length - 1)
    return event;
  }
}
