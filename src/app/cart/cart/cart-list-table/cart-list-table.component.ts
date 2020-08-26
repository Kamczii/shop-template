import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { CartItem } from 'src/app/shared/models/CartItem';



@Component({
  selector: 'app-cart-list-table',
  templateUrl: './cart-list-table.component.html',
  styleUrls: ['./cart-list-table.component.scss']
})
export class CartListTableComponent implements OnInit {
 
  @Input() cartItems: CartItem[];
  
  constructor() { }

  ngOnInit() {
    
  }

}
