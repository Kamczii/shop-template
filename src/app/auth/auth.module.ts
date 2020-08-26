import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginFormComponent } from './auth-container/login-form/login-form.component';
import { RegisterFormComponent } from './auth-container/register-form/register-form.component';
import { AuthContainerComponent } from './auth-container/auth-container.component';
import { GoogleAuthButtonComponent } from './google-auth-button/google-auth-button.component';
import { MatCardModule, MatTabsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatIconModule, MatIconRegistry, MatMenuModule, MatDividerModule, MatListModule, MatSnackBarModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [AuthComponent,
    LoginFormComponent,
    RegisterFormComponent,
    AuthContainerComponent,
    GoogleAuthButtonComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AuthRoutingModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,
    CoreModule,
    SharedModule,
    MatSnackBarModule
  ],
  providers:  [MatIconRegistry]
})
export class AuthModule { }
