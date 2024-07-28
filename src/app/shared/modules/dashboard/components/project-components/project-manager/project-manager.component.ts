import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../dashboard-core/services/dashboard.service';
import { DashboardStateService } from '../../../dashboard-core/services/dashboard-state.service';
import {
  AllProjectStatus,
  ProjectStatus,
} from '../../../dashboard-core/models/project-models/projectStatusEnum';
import { ProjectStateService } from '../../../dashboard-core/services/project-services/project-state.service';
import { ProjectService } from '../../../dashboard-core/services/project-services/project.service';

// models
import { IGetAllClient } from '../../../dashboard-core/models/customerApiResp';
import { IGetProjectResp } from '../../../dashboard-core/models/project-models/ProjectApiRespInterface';

import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-project-manager',
  templateUrl: './project-manager.component.html',
  styleUrls: ['./project-manager.component.scss'],
})
export class ProjectManagerComponent implements OnInit {
  customers: IGetAllClient[] | null = [];
  projectList: IGetProjectResp[][] | null;

  constructor(
    private dashBoardService: DashboardService,
    private projectService: ProjectService,
    private projectStateService: ProjectStateService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.subscribeClientList();
    this.subscribeProjectList();
    this.getCustomer();
    this.getProject(ProjectStatus.Active, '');
  }

  openEditingForm() {}

  getProject(status: AllProjectStatus, search: string) {
    this.projectService.getAllProject(status, search).subscribe((projects) => {
      this.projectStateService.updateProjectList(
        this.customers,
        projects.result
      );
    });
  }

  getCustomer() {
    this.dashBoardService.getAllCustomer().subscribe((customers) => {
      this.projectStateService.updateClientList(customers.result);
    });
  }

  // subscribers
  subscribeProjectList() {
    this.projectStateService.projectList.subscribe((list) => {
      this.projectList = list;
    });
  }
  subscribeClientList() {
    this.projectStateService.customerList.subscribe((list) => {
      this.customers = list;
    });
  }
}
