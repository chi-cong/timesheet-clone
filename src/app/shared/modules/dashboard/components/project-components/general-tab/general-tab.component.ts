import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DashboardService } from 'src/app/modules/dashboard/dashboard-core/services/dashboard.service';
import { ProjectStateService } from 'src/app/modules/dashboard/dashboard-core/services/project-services/project-state.service';

import { ISelectItem } from 'src/app/core/models/standaloneCompModels/selectItemIterface';
import { IGetAllClient } from 'src/app/modules/dashboard/dashboard-core/models/customerApiResp';
import { ProjectTypes } from 'src/app/modules/dashboard/dashboard-core/models/project-models/projectTypes';

@Component({
  selector: 'app-general-tab',
  templateUrl: './general-tab.component.html',
  styleUrls: ['./general-tab.component.scss'],
})
export class GeneralTabComponent implements OnInit {
  @Input() fg: FormGroup;
  clientOptions: ISelectItem[] = [];
  projectTypeList: ISelectItem[] = [
    { value: ProjectTypes.TM, viewValue: 'Time & Material' },
    { value: ProjectTypes.FF, viewValue: 'Fixed Fee' },
    { value: ProjectTypes.NB, viewValue: 'Non-Billable' },
    { value: ProjectTypes.ODC, viewValue: 'ODC' },
    { value: ProjectTypes.P, viewValue: 'Product' },
    { value: ProjectTypes.T, viewValue: 'Training' },
  ];

  constructor(
    private dashboardService: DashboardService,
    private projectStateService: ProjectStateService
  ) {}

  ngOnInit(): void {
    this.getCustomers();
    this.fg = this.projectStateService.createEditForm;
  }

  getCustomers() {
    this.dashboardService.getAllCustomer().subscribe((data) => [
      data.result.forEach((element: IGetAllClient) => {
        this.clientOptions.push({
          value: element.id,
          viewValue: element.name,
        });
      }),
    ]);
  }

  openNewClientForm() {}

  updateValidationState() {
    this.projectStateService.updateformValidation(this.fg.status);
  }
}
