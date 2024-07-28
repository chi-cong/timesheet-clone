// angular stuff
import { Component, OnInit } from '@angular/core';

// services
import { SidenavService } from '../../../dashboard-core/services/sidenav.service';
import { DashboardService } from '../../../dashboard-core/services/dashboard.service';
import { DashboardStateService } from '../../../dashboard-core/services/dashboard-state.service';

// models
import { ISessionResp } from '../../../dashboard-core/models/sessionRespInterface';
import { IApiResp } from 'src/app/core/models/apiRespInterface';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  // whether the nav side bar appears
  isOpened: boolean;

  // result from session api call
  sessionRespResult: ISessionResp = {
    application: {
      version: 'string',
      releaseDate: '2022-10-19T09:33:20.299Z',
      features: {
        additionalProp1: true,
        additionalProp2: true,
        additionalProp3: true,
      },
    },
    user: {
      name: 'string',
      surname: 'string',
      userName: 'string',
      emailAddress: 'string',
      allowedLeaveDay: 0,
      type: 0,
      level: 0,
      sex: 0,
      branch: 0,
      avatarPath: 'string',
      avatarFullPath: 'string',
      morningWorking: 'string',
      morningStartAt: 'string',
      morningEndAt: 'string',
      afternoonWorking: 'string',
      afternoonStartAt: 'string',
      afternoonEndAt: 'string',
      isWorkingTimeDefault: true,
      branchId: 0,
      id: 0,
    },
    tenant: {
      tenancyName: 'string',
      name: 'string',
      id: 0,
    },
  };

  // current child route
  currRoute: string;

  constructor(
    private sidenavService: SidenavService,
    private dashboardService: DashboardService,
    private dashboardStateService: DashboardStateService
  ) {}

  ngOnInit(): void {
    this.subscribeShowingState();
    this.getSessionInfo();
  }

  // get the session data, include user's data
  getSessionInfo(): void {
    this.dashboardService.getCurrLoginInfo().subscribe((resp: IApiResp) => {
      if (resp.result) {
        this.sessionRespResult = resp.result;
      }
    });
  }

  /* State subscribers */

  // track the nav side bar appearing status
  subscribeShowingState(): void {
    this.sidenavService.toggleNavState.subscribe((state) => {
      this.isOpened = state;
    });
  }
}
