import { HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[integerMask]'
})
export class IntergerDirective {

  constructor(private el: ElementRef) {

  }

  @HostListener('keyup', ['$event']) 
  onKeyupHandler(event) {
    let newVal: String;
    if (event.key === 'backspace') {
      newVal = event.target.value.substring(0, event.target.value.length);

    }
    else{
      newVal = event.target.value;
      newVal =  newVal.replace(/[^0-9]/,'');
    }
    this.el.nativeElement.value = newVal;
  }
}
