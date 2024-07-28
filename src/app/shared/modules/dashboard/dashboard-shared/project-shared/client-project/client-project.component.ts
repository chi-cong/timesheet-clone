import { Component, OnInit, Input } from '@angular/core';
import { ProjectStateService } from '../../../dashboard-core/services/project-services/project-state.service';
import { ProjectService } from '../../../dashboard-core/services/project-services/project.service';

// models
import {
  IMenuItem,
  IDropdownButton,
} from 'src/app/core/models/standaloneCompModels/dropdownPanelInterfaces';
import { ProjectStatus } from '../../../dashboard-core/models/project-models/projectStatusEnum';
import {
  AllProjecActions,
  ProjectMenuActions,
} from '../../../dashboard-core/models/project-models/projectMenuActions';
import { IApiResp } from 'src/app/core/models/apiRespInterface';

@Component({
  selector: 'app-client-project',
  templateUrl: './client-project.component.html',
  styleUrls: ['./client-project.component.scss'],
})
export class ClientProjectComponent implements OnInit {
  @Input() name: string;
  @Input() pms: string[];
  @Input() activeMember: number;
  @Input() type: string;
  @Input() startDate: string | null;
  @Input() endDate: string | null;
  @Input() id: number;
  @Input() status: ProjectStatus.Active | ProjectStatus.Inactive;

  // dropdown action button and item options
  dropdownBtnContent: IDropdownButton = {
    prefixIcon: '',
    suffixIcon: 'arrow_drop_down',
    text: 'actions',
  };
  dropdownItems: IMenuItem[] = [
    {
      text: 'edit',
      prefixIcon: 'edit',
    },
    {
      text: 'view',
      prefixIcon: 'visibility',
    },
    {
      text: 'deactive',
      prefixIcon: 'close',
    },
    {
      text: 'delete',
      prefixIcon: 'delete',
    },
  ];

  constructor(
    private projectService: ProjectService,
    private projectStateService: ProjectStateService
  ) {}

  ngOnInit(): void {
    if (this.status === ProjectStatus.Inactive) {
      this.dropdownItems[2].prefixIcon = 'check';
      this.dropdownItems[2].text = 'active';
    }
  }

  itemClickHandle(action: any) {
    if (action === ProjectMenuActions.Active) {
      this.activeCurrProject();
    }
    if (action === ProjectMenuActions.Deactive) {
      this.deactiveCurrProject();
    }
    if (action === ProjectMenuActions.Edit) {
    }
    if (action === ProjectMenuActions.Delete) {
      this.deleteProject();
    }
    if (action === ProjectMenuActions.View) {
    }
  }

  deleteProject() {
    this.projectService.deleteProject(this.id).subscribe((data) => {
      this.updateProjectList(data);
    });
  }

  updateProjectList(data: IApiResp) {
    this.projectStateService.updateProjectList(
      this.projectStateService.customerList.value,
      data.result
    );
  }

  activeCurrProject() {
    this.projectService.activeProject(this.id).subscribe((data) => {
      this.updateProjectList(data);
    });
  }
  deactiveCurrProject() {
    this.projectService.deactiveProject(this.id).subscribe((data) => {
      this.updateProjectList(data);
    });
  }
}
