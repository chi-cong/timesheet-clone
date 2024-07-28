import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, concatMap } from 'rxjs';

// services
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { ProjectStateService } from './project-state.service';

// models
import { dashboardApi } from '../../models/dashboardApiUrls';
import { localStorageKeys } from 'src/app/core/models/localStorageKeys';
import { IApiResp } from 'src/app/core/models/apiRespInterface';
import {
  ProjectStatus,
  AllProjectStatus,
} from '../../models/project-models/projectStatusEnum';
import { ISaveProject } from '../../models/project-models/ProjectApiRespInterface';

@Injectable()
export class ProjectService {
  apiPrefix = environment.apiPrefix;

  constructor(
    private http: HttpClient,
    private projectStateService: ProjectStateService
  ) {}

  getAllProject(
    status: AllProjectStatus,
    search: string
  ): Observable<IApiResp> {
    this.projectStateService.updateProjectList();
    let query: string = '';
    //query handler
    if (status !== ProjectStatus.AllStatus && search === '') {
      query = `?status=${status}`;
    } else if (search !== '' && status === ProjectStatus.AllStatus) {
      query = `?search=${search}`;
    } else if (search !== '' && status !== ProjectStatus.AllStatus) {
      query = `?status=${status}&search=${search}`;
    }
    const apiUrl = this.apiPrefix + dashboardApi.GetAllProject + query;
    return this.http.get<IApiResp>(apiUrl);
  }

  deleteProject(id: number): Observable<IApiResp> {
    const apiUrl = this.apiPrefix + dashboardApi.DeleteProject + '?id=';
    return this.http.delete<IApiResp>(apiUrl + id).pipe(
      concatMap(() => {
        return this.getAllProject(
          this.projectStateService.displayedProjectStatus.value,
          this.projectStateService.currProjectSearch.value
        );
      })
    );
  }

  activeProject(id: number): Observable<IApiResp> {
    const apiUrl = this.apiPrefix + dashboardApi.ActiveProject;
    return this.http.post<IApiResp>(apiUrl, { id: id }).pipe(
      concatMap(() => {
        return this.getAllProject(
          this.projectStateService.displayedProjectStatus.value,
          this.projectStateService.currProjectSearch.value
        );
      })
    );
  }
  deactiveProject(id: number): Observable<IApiResp> {
    const apiUrl = this.apiPrefix + dashboardApi.DeactiveProject;
    return this.http.post<IApiResp>(apiUrl, { id: id }).pipe(
      concatMap(() => {
        return this.getAllProject(
          this.projectStateService.displayedProjectStatus.value,
          this.projectStateService.currProjectSearch.value
        );
      })
    );
  }

  getProjectQuantity(): Observable<IApiResp> {
    const apiUrl = this.apiPrefix + dashboardApi.GetQuantityProject;
    return this.http.get<IApiResp>(apiUrl);
  }

  saveProject(form: ISaveProject): Observable<IApiResp> {
    const apiUrl = this.apiPrefix + dashboardApi.SaveProject;
    return this.http.post<IApiResp>(apiUrl, form).pipe(
      concatMap(() => {
        return this.getAllProject(
          this.projectStateService.displayedProjectStatus.value,
          this.projectStateService.currProjectSearch.value
        );
      })
    );
  }
}
