import { Component, OnInit } from '@angular/core';
import { DashboardStateService } from 'src/app/modules/dashboard/dashboard-core/services/dashboard-state.service';
import {
  AllDashboardRoutes,
  DashboardRoutes,
} from 'src/app/modules/dashboard/dashboard-core/models/routes';

@Component({
  selector: 'app-nav-body',
  templateUrl: './nav-body.component.html',
  styleUrls: ['./nav-body.component.scss'],
})
export class NavBodyComponent implements OnInit {
  routeList: AllDashboardRoutes[] = [
    DashboardRoutes.Home,
    DashboardRoutes.Project,
  ];
  currRoute: AllDashboardRoutes;
  constructor(private dashboardStateService: DashboardStateService) {}

  ngOnInit(): void {
    this.subscribeCurrRoute();
  }

  // track the current child route
  subscribeCurrRoute(): void {
    this.dashboardStateService.currRoute.subscribe((currRoute) => {
      this.currRoute = currRoute;
    });
  }
}
