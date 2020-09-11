import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FilterSymbol } from 'src/app/shared/enums/filter-symbol.enum';
import { BaseFilter } from 'src/app/shared/models/BaseFilter';
@Component({
  selector: 'app-price-filter',
  templateUrl: './price-filter.component.html',
  styleUrls: ['./price-filter.component.scss']
})
export class PriceFilterComponent implements OnInit {

  @Output() filterChanged = new EventEmitter<BaseFilter>();

  constructor() { }

  ngOnInit() {
  }

  changeMinPrice($event){
    let filter: BaseFilter = {
      field: 'price',
      symbol: FilterSymbol.gt,
      value: +$event.target.value
    } 
    this.filterChanged.emit(filter);
  }

  changeMaxPrice($event){
    let filter: BaseFilter = {
      field: 'price',
      symbol: FilterSymbol.lt,
      value: +$event.target.value
    } 
    this.filterChanged.emit(filter);
  }
}
