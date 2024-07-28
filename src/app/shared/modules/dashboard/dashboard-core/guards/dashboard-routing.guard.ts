import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

import { DashboardRoutes } from '../models/routes';
import { DashboardStateService } from '../services/dashboard-state.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardRoutingGuard implements CanActivate, CanActivateChild {
  constructor(
    private router: Router,
    private dashboardStateService: DashboardStateService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    // if (this.dashboardStateService.currRoute.value === DashboardRoutes.Home) {
    //   this.router.navigate(['./dashboard']);
    //   return false;
    // }
    return true;
  }
}
