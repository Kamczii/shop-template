import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/core/services/product.service';
import { BaseFilter } from 'src/app/shared/models/BaseFilter';
import { FilterSymbol } from 'src/app/shared/enums/filter-symbol.enum';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  products: Product[];
  limit: number = 15;
  startAt: Product;
  endBefore: Product;
  filter: BaseFilter[] = [];
  category: string;
  panelOpenState;

  constructor(private productService: ProductService, private route: ActivatedRoute) {
    window.innerWidth<768 ? this.panelOpenState = false : this.panelOpenState = true;
    
      
    this.route.params.subscribe((params) => {
      let index = this.filter.findIndex(value => {
        return (value.field == 'category')
      })

      if (params.category) {
        if (index == -1) {
          this.category = params.category;
          this.filter.push({
            field: 'category',
            symbol: FilterSymbol.eq,
            value: params.category
          })
        }
        else {
          this.filter[index] = {
            field: 'category',
            symbol: FilterSymbol.eq,
            value: params.category
          }
        }
      }
      else {
        this.filter.slice(index, 1);
        this.category = 'Wszystko'
      }


      this.getProducts(this.filter);
    })

  }

  ngOnInit() {
    this.getProducts(this.filter);
  }

  ngOnDestroy() {

  }

  getProducts(filters?) {
    this.productService.getAllProducts(this.limit, filters).subscribe(response => {
      this.products = response;
    });
  }

  changeFilter(filters: BaseFilter[]) {
    this.getProducts(filters)
  }



}
