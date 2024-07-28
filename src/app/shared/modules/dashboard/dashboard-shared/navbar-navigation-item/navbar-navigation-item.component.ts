import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DashboardStateService } from '../../dashboard-core/services/dashboard-state.service';
import { AllDashboardRoutes } from '../../dashboard-core/models/routes';

@Component({
  selector: 'app-navbar-navigation-item',
  templateUrl: './navbar-navigation-item.component.html',
  styleUrls: ['./navbar-navigation-item.component.scss'],
})
export class NavbarNavigationItemComponent {
  @Input() iconName: string;
  @Input() content: string;
  @Input() currRoute: AllDashboardRoutes;
  @Input() navigationTarget: AllDashboardRoutes;
  @Input() extendable: boolean = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dashboardStateService: DashboardStateService
  ) {}

  navigate(): void {
    this.router.navigate([`./${this.navigationTarget}`], {
      relativeTo: this.activatedRoute,
    });
    this.dashboardStateService.updateCurrRoute(this.navigationTarget);
  }
}
