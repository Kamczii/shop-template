import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BaseFilter } from '../../models/BaseFilter';
import { FilterSymbol } from '../../enums/filter-symbol.enum';
import { Sizes } from '../../enums/sizes.enum';

@Component({
  selector: 'app-size-form',
  templateUrl: './size-form.component.html',
  styleUrls: ['./size-form.component.scss']
})
export class SizeFormComponent implements OnInit {

  @Output() filterChanged = new EventEmitter<BaseFilter>();
  sizes = new FormControl();
  sizeList = Sizes;

  constructor() { }

  ngOnInit() {
  }

  selectionChange($event) {
    let array = [];
    for (let el of $event) {
      array.push({ size: el })
    }
    let filter: BaseFilter;
    filter = {
      field: 'sizes',
      symbol: FilterSymbol.arany,
      value: array
    }
    console.log(filter)
    this.filterChanged.emit(filter);
  }
}
