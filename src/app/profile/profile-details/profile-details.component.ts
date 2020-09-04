import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/shared/models/user';
import { Observable, Subscription } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { OrderService } from 'src/app/core/services/order.service';
import { Order } from 'src/app/shared/models/Order';
import { AddressFormValues } from 'src/app/shared/models/AddressFormValues';
import { take } from 'rxjs/operators';

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
  phoneForm: FormGroup;
  address: AddressFormValues;
  
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
  }


  updateAddress() {
    this.auth.updateAddress(this.addressForm.value.address).pipe(take(1)).subscribe(res => console.log(res));
  }

  updateEmail() {
    this.auth.updateEmail(this.emailForm.value.email.email).pipe(take(1)).subscribe(data => {
      this.editEmail = false;
    },error => console.log(error));
  }

  updatePhone() {
    this.auth.updatePhone(this.phoneForm.value.phone.phone).pipe(take(1)).subscribe(data => {}, error => console.log(error), () => this.editPhone = false);
  }
}
