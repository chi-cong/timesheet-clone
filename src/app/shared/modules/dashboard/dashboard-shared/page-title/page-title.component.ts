import { Component, Input } from '@angular/core';
import { ProjectService } from '../../dashboard-core/services/project-services/project.service';
import { ProjectStateService } from '../../dashboard-core/services/project-services/project-state.service';
import { AllProjectStatus } from '../../dashboard-core/models/project-models/projectStatusEnum';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss'],
})
export class PageTitleComponent {
  @Input() pageName: string = '';
  @Input() hasMenu: boolean = true;

  // current displayed project status
  currStatus: AllProjectStatus;
  searchString: string;

  constructor(
    private projectService: ProjectService,
    private projectStateService: ProjectStateService
  ) {}

  refresh(): void {
    this.projectService.getAllProject(this.currStatus, this.searchString);
  }

  // subscribe whenever current status or search string
  // of displayed projects changed
  subscribeCurrDisplayedState() {
    this.projectStateService.currProjectSearch.subscribe((searchText) => {
      this.searchString = searchText;
    });
    this.projectStateService.displayedProjectStatus.subscribe((status) => {
      this.currStatus = status;
    });
  }
}
