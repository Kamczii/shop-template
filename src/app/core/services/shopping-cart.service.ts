import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { CartItem } from 'src/app/shared/models/CartItem';
import { Sizes } from 'src/app/shared/enums/sizes.enum';
@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  

  cart: Array<CartItem>;
  
  constructor() { 
    this.cart = JSON.parse(localStorage.getItem('cart'));
    if(this.cart === null) 
      this.cart = new Array<CartItem>();
  }

  read(): Array<CartItem>{
    return this.cart;
  }


  add(item: CartItem){
    const productExistInCart = this.getItemIfExist(item);
    if (!productExistInCart) {
      this.cart.push({...item, count:1}); 
    } else{
      productExistInCart.count++;
    }
    this.updateLocalStorage();
  }
  
  remove(item: CartItem){
    const productExistInCart = this.getItemIfExist(item);
    let index = this.cart.indexOf(productExistInCart);
    this.cart.splice(index,1);
    this.updateLocalStorage();
  }

  cartItemsCount() {
    return this.cart.length;
  }

  updateLocalStorage(){
    localStorage.setItem('cart',JSON.stringify(this.cart));
  }

  getCartPrice(){
    let sum = 0;
    this.cart.forEach((item) => {
      sum+=item.count*item.product.price;
    })
    return sum;
  }

  changeItemSize(item: CartItem, size: Sizes){
    let productInCart = this.getItemIfExist(item);
    productInCart.size = size;
    this.updateLocalStorage();
  }

  changeItemCount(item: CartItem, count: number){
    let productInCart = this.getItemIfExist(item);
    productInCart.count = count;
    this.updateLocalStorage();
  }

  getItemIfExist(item: CartItem): CartItem {
    return this.cart.find(p => (p.product.id === item.product.id && p.size === item.size));
  }

  clearCart(){
    this.cart = [];
    this.updateLocalStorage();
  }
}
