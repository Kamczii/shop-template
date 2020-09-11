import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/core/services/product.service';
import { Injector } from '@angular/core';
import { ControlValueAccessorConnectorStaticFalse } from '../../control-value-accessor-connector-false';

@Component({
  selector: 'app-category-select',
  templateUrl: './category-select.component.html',
  styleUrls: ['./category-select.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR, useExisting: CategorySelectComponent, multi: true
  }]
})
export class CategorySelectComponent  extends ControlValueAccessorConnectorStaticFalse implements OnInit{


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
