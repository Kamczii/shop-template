import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminGuard } from '../core/guards/admin.guard';


const routes: Routes = [
  { path: '', component: AdminPanelComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
