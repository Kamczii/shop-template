import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatAutocomplete, MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';
import { startWith, map } from 'rxjs/operators';
import { BaseFilter } from '../../models/BaseFilter';
import { FilterSymbol } from '../../enums/filter-symbol.enum';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-brand-form',
  templateUrl: './brand-form.component.html',
  styleUrls: ['./brand-form.component.scss']
})
export class BrandFormComponent implements OnInit {
  @Input() multiple: boolean = true;
  @Output() filterChanged = new EventEmitter<BaseFilter>();
  @Output() selectionChanged = new EventEmitter<string>();

  brands = new FormControl();
  brandList$: Observable<string[]>;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.brandList$ = this.productService.getAllBrands();
  }

  selectionChange($event){
    console.log($event);
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
