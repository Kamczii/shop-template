import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/shared/models/user';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { OrderService } from 'src/app/core/services/order.service';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {

  profile$: Observable<User>;
  orders$: Observable<Order[]>;
  emailForm: FormGroup;
  addressForm: FormGroup;

  constructor(private auth: AuthService, private fb: FormBuilder, private orderService: OrderService) {
    this.addressForm = this.fb.group({
      address: []
    });
    this.emailForm = this.fb.group({
      email: []
    });
  }

  ngOnInit() {
    this.profile$ = this.auth.user$;

    this.orders$ = this.orderService.getUserOrders();
  }

  updateAddress() {
    this.auth.updateAddress(this.addressForm.value);
  }

  updateEmail() {
    this.auth.updateEmail(this.emailForm.value);
  }
}
