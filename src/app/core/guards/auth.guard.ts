import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router, UrlTree } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { GlobalStateService } from '../services/global-state.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
    private location: Location,
    private globalStateService: GlobalStateService,
    private router: Router
  ) {}
  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const accessable: boolean =
      this.globalStateService.checkAuthenticationState();
    if (!accessable || (accessable && this.location.path() === '')) {
      this.router.navigate(['./account']);
    }

    return accessable;
  }
  canLoad():
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    const accessable: boolean =
      this.globalStateService.checkAuthenticationState();
    return accessable;
  }
}
