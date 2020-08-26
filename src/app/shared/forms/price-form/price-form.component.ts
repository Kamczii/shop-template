import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-form',
  templateUrl: './price-form.component.html',
  styleUrls: ['./price-form.component.scss']
})
export class PriceFormComponent implements OnInit {

  minPrice = 0;
  maxPrice = 250;
  
  constructor() { }

  ngOnInit() {
  }

}
