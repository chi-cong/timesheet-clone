import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// models
import { ISessionResp } from '../models/sessionRespInterface';
import { DashboardRoutes, AllDashboardRoutes } from '../models/routes';

@Injectable()
export class DashboardStateService {
  // current logged user data
  currUserData: BehaviorSubject<ISessionResp | null> =
    new BehaviorSubject<ISessionResp | null>(null);

  // current dashboard route
  currRoute: BehaviorSubject<AllDashboardRoutes> =
    new BehaviorSubject<AllDashboardRoutes>(DashboardRoutes.Home);

  constructor() {}

  updateUserData(userData: ISessionResp) {
    this.currUserData.next(userData);
  }

  updateCurrRoute(route: AllDashboardRoutes) {
    this.currRoute.next(route);
  }
}
