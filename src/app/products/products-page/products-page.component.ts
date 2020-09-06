import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/core/services/product.service';
import { BaseFilter } from 'src/app/shared/models/BaseFilter';
import { FilterSymbol } from 'src/app/shared/enums/filter-symbol.enum';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  products: Product[];
  limit: number = 8;
  startAt: Product;
  endBefore: Product;
  filter: BaseFilter[];
  
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(filters?) {
    this.productService.getAllProducts(this.limit, filters).subscribe(response => {
      this.products = response;
    });
  }

  changeFilter(filters: BaseFilter[]){
    this.getProducts(filters)
  }

  

}
