import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BaseFilter } from '../../models/BaseFilter';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/core/services/product.service';
import { FilterSymbol } from '../../enums/filter-symbol.enum';
import { ControlValueAccessorConnectorTrue } from '../control-value-accessor-connector-true';
import { Injector } from '@angular/core';
import { ControlValueAccessorConnectorFalse } from '../control-value-accessor-connector-false';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR, useExisting: CategoryFormComponent, multi: true
  }]
})
export class CategoryFormComponent  extends ControlValueAccessorConnectorFalse implements OnInit{


  categoryList$: Observable<string[]>;


  constructor(injector: Injector,private productService: ProductService ) {
    super(injector);
  }


  ngOnInit() {
    this.categoryList$ = this.productService.getAllCategories();
  }
  
  clearInput() {
    this.control.setValue('');
  }
}
