import { Component, OnInit, OnDestroy, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { ControlValueAccessor, FormGroup, FormBuilder, Validators, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl, FormArray } from '@angular/forms';
import { Subscription, Subject } from 'rxjs';
import { AddressFormComponent } from 'src/app/shared/forms/address-form/address-form.component';
import { Product } from 'src/app/shared/models/product';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatChipInputEvent, MatSelectionListChange, MatSnackBar } from '@angular/material';
import { Sizes } from 'src/app/shared/enums/sizes.enum';
import { Size } from 'src/app/shared/models/Size';
import { ProductService } from 'src/app/core/services/product.service';
import { DocumentReference } from '@angular/fire/firestore';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddressFormComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AddressFormComponent),
      multi: true,
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormComponent implements ControlValueAccessor, OnDestroy {

  //chipList
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  //sizeList
  sizes = Sizes;
  selectedSizes = new Set<Sizes>();

  productForm: FormGroup;
  subscriptions: Subscription[] = [];

  productIdSubject: Subject<any> = new Subject<any>();
  resetSubject: Subject<any> = new Subject<any>();

  imagesCount: number = 0;

  get value(): Product {
    return this.productForm.value;
  }

  set value(value: Product) {
    this.productForm.setValue(value);
    this.onChange(value);
    this.onTouched();
  }


  constructor(private fb: FormBuilder, private productService: ProductService, private snackBar: MatSnackBar) {
    this.createForm();

    this.subscriptions.push(
      this.productForm.valueChanges.subscribe(value => {
        this.onChange(value);
        this.onTouched();
      })
    );
  }

  onChange: any = () => { };
  onTouched: any = () => { };

  writeValue(value) {
    if (value) {
      this.value = value;
    }

    if (value === null) {
      this.productForm.reset();
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  validate(_: FormControl) {
    return this.productForm.valid && this.imagesCount>0;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  reset() {
    this.productForm.reset();
  }

  getControls() {
    return this.productForm.controls;
  }

  //chipList

  get advantages() {
    return this.productForm.controls.advantages;
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.advantages.value.push(value);
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(advantage: string): void {
    const index = this.advantages.value.indexOf(advantage);

    if (index >= 0) {
      this.advantages.value.splice(index, 1);
    }
  }

  dynamicCreateSizeInputs() {
    let control = this.productForm.controls.sizes as FormArray;
    for (let size in Sizes) {
      if (isNaN(+size))
        control.push(this.fb.group({
          size: [size, Validators.required],
          count: [0, Validators.required]
        }))
    }
  }

  dynamicCreateSizeInput(event) {
    if(event.key == 'Enter'){
      console.log(event.key)
      let control = this.productForm.controls.sizes as FormArray;
        control.push(this.fb.group({
          size: [event.target.value, Validators.required],
          count: [0, Validators.required]
        }))
        event.target.value =''
    }
  }

  emitProductId(id: string){
    this.productIdSubject.next(id);
  }

  createForm(){
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      advantages: [[]],
      sizes: new FormArray([])
    });

    this.dynamicCreateSizeInputs();
    
    this.resetSubject.next()
  }
  addProduct(){
    this.productService.addProduct(this.productForm.value).catch(err => this.openSnackBar(err,"zamknij")).then((val: DocumentReference) => {
      this.emitProductId(val.id); 
      this.openSnackBar(val.id+" dodano","zamknij");
      this.createForm();
    });
  }

    openSnackBar(message: string, action: string) {
      this.snackBar.open(message, action, {
        duration: 2000,
      });
    }
}
