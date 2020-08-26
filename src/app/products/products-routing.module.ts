import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './products-page/product-details/product-details.component';
import { ProductsPageComponent } from './products-page/products-page.component';


const routes: Routes = [
  {path: '', component: ProductsPageComponent},
  {path: 'products/:id', component: ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
