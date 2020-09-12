import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { BaseFilter } from 'src/app/shared/models/BaseFilter';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {

  @Output() onChangeFilter = new EventEmitter<BaseFilter[]>();

  filters: BaseFilter[] = [];

  constructor() {

  }

  ngOnInit(): void {

  }

  changeFilter($event: BaseFilter) {
    this.addFilter($event)
    this.onChangeFilter.emit(this.filters);
  }

  addFilter(filter: BaseFilter) {
    let index = this.filters.findIndex((currentValue, index) => {
      return (filter.field == currentValue.field && filter.symbol == currentValue.symbol)
    })

    if (index >= 0)
      this.filters[index] = filter;
    else
      this.filters.push(filter);

    //delete empty array
    let index2 = this.filters.findIndex((currentValue) => {
      return (currentValue.value.length === 0)
    })
    if (index2 >= 0)
      this.filters.splice(index2, 1)

  }

}
