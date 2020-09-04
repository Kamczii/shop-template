import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FilterSymbol } from '../../enums/filter-symbol.enum';
import { BaseFilter } from '../../models/BaseFilter';

@Component({
  selector: 'app-price-form',
  templateUrl: './price-form.component.html',
  styleUrls: ['./price-form.component.scss']
})
export class PriceFormComponent implements OnInit {

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
