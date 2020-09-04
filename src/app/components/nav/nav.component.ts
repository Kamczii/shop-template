import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/shared/models/user';
import { AdminGuard } from 'src/app/core/guards/admin.guard';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  user: User;
  cartCount: number = 0;
  constructor(public cartService: ShoppingCartService, private authService: AuthService) {
    this.authService.user$.subscribe(data => {console.log(data);this.user = data})
  }

  ngOnInit(): void {

  }

  hasAdmin(){
    return this.authService.hasAdmin(this.user);
  }
}
