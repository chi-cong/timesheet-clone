import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

// services;
import { ProjectStateService } from '../../../dashboard-core/services/project-services/project-state.service';
import { ProjectService } from '../../../dashboard-core/services/project-services/project.service';

// models
import { ProjectTypes } from '../../../dashboard-core/models/project-models/projectTypes';
import { IApiResp } from 'src/app/core/models/apiRespInterface';

@Component({
  selector: 'app-create-edit-entry',
  templateUrl: './create-edit-entry.component.html',
  styleUrls: ['./create-edit-entry.component.scss'],
})
export class CreateEditEntryComponent implements OnInit {
  actionState = 'create project';
  validationState: boolean = true;
  selectedStep = 0;

  fg: FormGroup;

  constructor(
    private projectStateService: ProjectStateService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscribeValidationState();
    this.fg = this.projectStateService.createEditForm;
    this.selectionChange();
  }

  submit(event: any) {
    event.preventDefault();
    this.backToPreviousPage();
  }

  updateValidationState() {
    this.projectStateService.updateformValidation(this.fg.status);
  }

  updateProjectList(data: IApiResp) {
    this.projectStateService.updateProjectList(
      this.projectStateService.customerList.value,
      data.result
    );
  }

  subscribeValidationState() {
    this.projectStateService.formValidation.subscribe((state) => {
      this.validationState = state;
    });
  }

  selectionChange(event?: any) {
    this.selectedStep = event ? event.selectedIndex : 0;

    switch (this.selectedStep) {
      case 0:
        this.router.navigate(['./general'], { relativeTo: this.route });
        break;
      case 1:
        this.router.navigate(['./team'], { relativeTo: this.route });
        break;
      case 2:
        this.router.navigate(['./task'], { relativeTo: this.route });
        break;
      case 3:
        this.router.navigate(['./notification'], { relativeTo: this.route });
        break;
    }
  }

  backToPreviousPage() {
    this.projectStateService.updateProjectDisplayerState(true);
    this.router.navigate(['./dashboard/project']);
  }
}
