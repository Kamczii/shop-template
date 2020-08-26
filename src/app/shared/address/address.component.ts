import { Component, OnInit, Input } from '@angular/core';
import { AddressFormValues } from '../models/AddressFormValues';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  @Input() address: AddressFormValues;
  
  constructor() { }

  ngOnInit() {
  }

}
