import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-size-form',
  templateUrl: './size-form.component.html',
  styleUrls: ['./size-form.component.scss']
})
export class SizeFormComponent implements OnInit {

  toppings = new FormControl();
  sizeList: string[] = ['XL', 'L', 'M', 'S', 'XS'];
  
  constructor() { }

  ngOnInit() {
  }

}
