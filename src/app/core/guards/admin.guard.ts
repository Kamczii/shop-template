import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { take, map, tap } from 'rxjs/operators';

@Injectable()
export class AdminGuard implements CanLoad {

  constructor(private auth: AuthService) { }

  canLoad(route: Route, segments: import("@angular/router").UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    return this.auth.user$.pipe(
      take(1),
      map(user => user && user.roles.admin ? true : false),
      tap(isAdmin => {
        if (!isAdmin)
          console.log('access denied')
      })
    );
  }

}
