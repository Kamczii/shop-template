import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BaseFilter } from '../../models/BaseFilter';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/core/services/product.service';
import { FilterSymbol } from '../../enums/filter-symbol.enum';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {

  @Input() multiple: boolean = true;
  @Output() filterChanged = new EventEmitter<BaseFilter>();
  @Output() selectionChanged = new EventEmitter<string>();

  categories = new FormControl();
  categoryList$: Observable<string[]>;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.categoryList$ = this.productService.getAllCategories();
  }

  selectionChange($event){
    let filter: BaseFilter;
      filter = {
      field: 'category',
      symbol: FilterSymbol.eq,
      value: $event
    } 
    this.filterChanged.emit(filter);
    this.selectionChanged.emit($event)
  }
}
