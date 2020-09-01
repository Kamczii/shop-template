import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/shared/models/user';
import { Observable, Subscription } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { OrderService } from 'src/app/core/services/order.service';
import { Order } from 'src/app/shared/models/Order';
import { AddressFormValues } from 'src/app/shared/models/AddressFormValues';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit, OnDestroy{

  profile$: Observable<User>;
  orders$: Observable<Order[]>;
  emailForm: FormGroup;
  addressForm: FormGroup;
  phoneForm: FormGroup;
  address: AddressFormValues;
  subscriptions: Subscription[] = [];
  
  editEmail: boolean = false;
  editPhone: boolean = false;

  constructor(private auth: AuthService, private fb: FormBuilder, private orderService: OrderService) {
    this.addressForm = this.fb.group({
      address: []
    });
    this.emailForm = this.fb.group({
      email: []
    });
    this.phoneForm = this.fb.group({
      phone: []
    });
  }

  ngOnInit() {
    this.profile$ = this.auth.user$;

    this.orders$ = this.orderService.getUserOrders();

    this.subscriptions.push(this.phoneForm.valueChanges.subscribe(() => {console.log(this.phoneForm.value)}));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  updateAddress() {
    this.subscriptions.push(this.auth.updateAddress(this.addressForm.value.address).subscribe(res => console.log(res)));
  }

  updateEmail() {
    this.subscriptions.push(this.auth.updateEmail(this.emailForm.value.email.email).subscribe(data => {
      this.editEmail = false;
    },error => console.log(error)));
  }

  updatePhone() {
    this.subscriptions.push(this.auth.updatePhone(this.phoneForm.value.phone.phone).subscribe(data => {
      this.editPhone = false;
    },error => console.log(error)));
  }
}
