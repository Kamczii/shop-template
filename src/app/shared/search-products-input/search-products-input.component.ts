import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map, tap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '../models/product';

@Component({
  selector: 'app-search-products-input',
  templateUrl: './search-products-input.component.html',
  styleUrls: ['./search-products-input.component.scss']
})
export class SearchProductsInputComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<Product[]>;

  constructor(private firestore: AngularFirestore){}

  ngOnInit() {
    // this.filteredOptions = this.myControl.valueChanges.pipe(
    //   startWith(''),
    //   map(value => this._filter(value))
    // // );
    // this.myControl.setValue('')
    // this.filteredOptions = this.firestore.collection<Product>('products', ref => ref
    // .orderBy("name")
    // .startAt(this.myControl.value.toLowerCase())
    // .endAt(this.myControl.value.toLowerCase()+"\uf8ff")
    // .limit(10)).valueChanges();
    // this.filteredOptions.subscribe(data => console.log(data))
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  search(){
    let value = this.myControl.value;
    if(value.length>2){

      this.filteredOptions = this.firestore.collection<Product>('products', ref => ref
      .orderBy("name")
      .startAt(this.myControl.value)
      .endAt(this.myControl.value+"\uf8ff")
      .limit(10)).snapshotChanges().pipe(
        map(changes => {
          return changes.map(a => {
            let data = a.payload.doc.data() as Product;
            data.id = a.payload.doc.id;
            return data;
          });
        }),
        tap(data => console.log(data))
      );
    }
    
  }
}
