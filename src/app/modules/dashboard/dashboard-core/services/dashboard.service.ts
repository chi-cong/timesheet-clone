import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, concatMap } from 'rxjs';

// services
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { DashboardStateService } from './dashboard-state.service';

// models
import { dashboardApi } from '../models/dashboardApiUrls';
import { localStorageKeys } from 'src/app/core/models/localStorageKeys';
import { IApiResp } from 'src/app/core/models/apiRespInterface';
import {
  ProjectStatus,
  AllProjectStatus,
} from '../models/project-models/projectStatusEnum';
import { ISaveProject } from '../models/project-models/ProjectApiRespInterface';

@Injectable()
export class DashboardService {
  // api-prefix url
  apiPrefix: string = environment.apiPrefix;

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
    private router: Router,
    private dashboardStateService: DashboardStateService
  ) {}

  // logout
  logout() {
    this.localStorageService.deleteLocalItem(localStorageKeys.AccessToken);
    this.localStorageService.deleteLocalItem(
      localStorageKeys.AuthExpirationDate
    );
    this.router.navigate(['./account/login']);
  }

  /******  Session api ******/
  // get the session infomation
  getCurrLoginInfo() {
    const apiUrl = this.apiPrefix + dashboardApi.GetCurrLoginInfo;
    return this.http.get(apiUrl);
  }

  /** cutomerApi **/
  getAllCustomer(): Observable<IApiResp> {
    const apiUrl = this.apiPrefix + dashboardApi.GetAllCustomer;
    return this.http.get<IApiResp>(apiUrl);
  }

  /** Branch api **/
  getAllBranch(): Observable<IApiResp> {
    const apiUrl =
      this.apiPrefix + dashboardApi.getAllBrachFilter + '?isAll=true';
    return this.http.get<IApiResp>(apiUrl);
  }

  /** user api**/
  getAllUserNotPagging(): Observable<IApiResp> {
    const apiUrl = this.apiPrefix + dashboardApi.GetUserNotPagging;
    return this.http.get<IApiResp>(apiUrl);
  }
}
