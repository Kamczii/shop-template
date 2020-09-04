import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.scss']
})
export class AddBrandComponent implements OnInit {
  brandVal: string;
  availableBrands: string[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAllBrands().subscribe(data => this.availableBrands = data);
  }

  addBrand(){
    let index = this.availableBrands.findIndex(brand =>{
      return brand == this.brandVal
    })
    if(index<0)
      this.productService.addBrand(this.brandVal);
    this.brandVal = '';
  }
}
