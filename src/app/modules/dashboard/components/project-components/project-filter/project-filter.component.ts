import { Component, OnInit } from '@angular/core';
import { ISelectItem } from 'src/app/core/models/standaloneCompModels/selectItemIterface';
import { IProjectQuantity } from '../../../dashboard-core/models/project-models/ProjectApiRespInterface';
import { ProjectService } from '../../../dashboard-core/services/project-services/project.service';
import { ProjectStateService } from '../../../dashboard-core/services/project-services/project-state.service';
import { ProjectStatus } from '../../../dashboard-core/models/project-models/projectStatusEnum';
import { Router, ActivatedRoute } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-project-filter',
  templateUrl: './project-filter.component.html',
  styleUrls: ['./project-filter.component.scss'],
})
export class ProjectFilterComponent implements OnInit {
  selectBoxOptions: ISelectItem[] = [
    { value: ProjectStatus.Active, viewValue: 'Active Project' },
    { value: ProjectStatus.Inactive, viewValue: 'Deactive Project' },
    { value: ProjectStatus.AllStatus, viewValue: 'All Project' },
  ];

  constructor(
    private projectService: ProjectService,
    private projectStateService: ProjectStateService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getProjectQuantity();
  }

  openAddingForm() {
    this.router.navigate(['./create'], { relativeTo: this.route });
    this.projectStateService.updateProjectDisplayerState(false);
  }

  getProjectQuantity() {
    this.projectService.getProjectQuantity().subscribe((data) => {
      const result: IProjectQuantity[] = data.result;
      let index = 0;
      let totalProject = 0;
      result.forEach((element: IProjectQuantity) => {
        this.selectBoxOptions[index].viewValue += `(${element.quantity})`;
        totalProject += element.quantity;
        index++;
      });
      this.selectBoxOptions[
        this.selectBoxOptions.length - 1
      ].viewValue += `(${totalProject})`;
    });
  }

  selectBoxValueChange(emittedValue: any): void {
    this.projectStateService.updateCurrProjectSearch(emittedValue);

    this.projectService
      .getAllProject(
        this.projectStateService.displayedProjectStatus.value,
        this.projectStateService.currProjectSearch.value
      )
      .subscribe((data) => {
        this.projectStateService.updateProjectList(
          this.projectStateService.customerList.value,
          data.result
        );
      });
  }
}
