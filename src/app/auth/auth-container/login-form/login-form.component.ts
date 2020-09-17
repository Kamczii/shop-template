import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcher, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';



@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public loginForm: FormGroup;
  matcher = new ErrorStateMatcher();

  get passwordControl() {
    return this.loginForm.controls['password']
  }

  constructor(private fb: FormBuilder, private auth: AuthService, private _snackBar: MatSnackBar, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    })
  }

  ngOnInit() {

  }

  getEmailControl() {
    return this.loginForm.controls['email'];
  }

  getPasswordControl() {
    return this.loginForm.controls['password'];
  }

  login() {
    this.auth.login(this.getEmailControl().value, this.getPasswordControl().value).then(data=>this.router.navigate(['/'])).catch(err => {
      if (err.code == "auth/user-not-found") this.openSnackBar("Nie ma takiego użytkownika", "zamknij");
    });
  }

  openSnackBar(message, action) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
