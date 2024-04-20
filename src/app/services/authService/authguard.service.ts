import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{

  constructor(private router: Router) {}

  canActivate(
    routerSnapshot: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    if(localStorage.getItem('AuthToken')) {
      return true;
    } else {
      // Navigate to '/login'
      return this.router.createUrlTree(['']);
    }
  }
}
