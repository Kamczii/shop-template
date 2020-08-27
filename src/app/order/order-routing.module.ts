import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinalizeOrderComponent } from './finalize-order/finalize-order.component';


const routes: Routes = [
  { path: '', component: FinalizeOrderComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
