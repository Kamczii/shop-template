import { Component, OnInit, Pipe, PipeTransform, forwardRef, ChangeDetectionStrategy, OnDestroy, Input, Injector } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/core/services/product.service';
import { Size } from '../../../models/Size';
import { ControlValueAccessorConnectorStaticFalse } from '../../control-value-accessor-connector-false';

@Component({
  selector: 'app-size-select',
  templateUrl: './size-select.component.html',
  styleUrls: ['./size-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SizeSelect),
      multi: true
    }
  ]
})
export class SizeSelect extends ControlValueAccessorConnectorStaticFalse {


  @Input() sizeList: Size[];

  constructor(injector: Injector) {
    super(injector);
  }

  clearInput() {
    this.control.setValue('');
  }

}
