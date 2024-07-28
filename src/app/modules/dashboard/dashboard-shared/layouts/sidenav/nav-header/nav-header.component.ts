import { Component, Input } from '@angular/core';
DashboardService;
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/modules/dashboard/dashboard-core/services/dashboard.service';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss'],
})
export class NavHeaderComponent {
  @Input() avatarPath: string;
  @Input() name: string;
  @Input() surname: string;
  @Input() email: string;

  constructor(
    private router: Router,
    private dashboardService: DashboardService
  ) {}

  logout() {
    this.dashboardService.logout();
  }
}
