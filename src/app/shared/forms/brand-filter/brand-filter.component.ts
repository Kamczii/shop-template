import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/core/services/product.service';
import { FilterSymbol } from '../../enums/filter-symbol.enum';
import { BaseFilter } from '../../models/BaseFilter';

@Component({
  selector: 'app-brand-filter',
  templateUrl: './brand-filter.component.html',
  styleUrls: ['./brand-filter.component.scss']
})

export class BrandFilterComponent implements OnInit {

  @Output() filterChanged = new EventEmitter<BaseFilter>();
  @Output() selectionChanged = new EventEmitter<string>();

  brands = new FormControl();
  brandList$: Observable<string[]>;
  
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.brandList$ = this.productService.getAllBrands();
  }

  selectionChange($event){
    let filter: BaseFilter;
      filter = {
      field: 'brand',
      symbol: FilterSymbol.in,
      value: $event
    } 
    this.filterChanged.emit(filter);
    this.selectionChanged.emit($event)
  }
}
