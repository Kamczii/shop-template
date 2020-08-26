import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { LoginFormComponent } from './auth-container/login-form/login-form.component';
import { RegisterFormComponent } from './auth-container/register-form/register-form.component';
import { AuthContainerComponent } from './auth-container/auth-container.component';

const routes: Routes = [{ path: '', component: AuthContainerComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
