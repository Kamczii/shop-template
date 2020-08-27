import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatAutocomplete, MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-brand-form',
  templateUrl: './brand-form.component.html',
  styleUrls: ['./brand-form.component.scss']
})
export class BrandFormComponent implements OnInit {


  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  brandCtrl = new FormControl();
  filteredBrands$: Observable<string[]>;
  brands: string[] = [];
  allFruits: string[] = ['Vans', 'Thrasher', 'Baker', 'DGK'];


  @ViewChild('brandInput', { static: false }) brandInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', { static: false }) matAutocomplete: MatAutocomplete;

  constructor() {
  }

  ngOnInit() {
    this.filteredBrands$ = this.brandCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.brands.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.brandCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.brands.indexOf(fruit);

    if (index >= 0) {
      this.brands.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.brands.push(event.option.viewValue);
    this.brandInput.nativeElement.value = '';
    this.brandCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }
}
