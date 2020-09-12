import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './core/guards/admin.guard';
import { TestingComponent } from './components/testing/testing.component';


const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'testing', component: TestingComponent },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canLoad: [AdminGuard] },
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  { path: 'finalize', loadChildren: () => import('./order/order.module').then(m => m.OrderModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
