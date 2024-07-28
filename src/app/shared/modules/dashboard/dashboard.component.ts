import { Component, OnInit } from '@angular/core';
import { SidenavService } from './dashboard-core/services/sidenav.service';
import { GlobalStateService } from 'src/app/core/services/global-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  bigScreen: boolean;

  constructor(
    private sidenavService: SidenavService,
    private globalStateService: GlobalStateService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscribeOverlayState();
    // this.router.navigate(['./dashboard/home']);
  }

  closeSidebar() {
    this.sidenavService.close();
    this.globalStateService.toggleOverlay(false);
  }

  subscribeOverlayState() {
    this.globalStateService.screenWidth.subscribe((widthSize) => {
      if (widthSize > 1170) {
        this.sidenavService.open();
        this.bigScreen = true;
      } else {
        this.sidenavService.close();
        this.bigScreen = false;
      }
    });
  }

  onResize(event: any) {
    this.globalStateService.updateScreenSize(event.target.innerWidth);
  }
}
