import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterFormComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: [],
      password: [],
    })
  }
  submit() {
    const email: string = this.registerForm.controls.email.value.email;
    const password: string = this.registerForm.controls.password.value.password;
    this.auth.register(email, password);
  }

}
