import { Component, OnInit } from '@angular/core';
import { ProjectStateService } from '../../dashboard-core/services/project-services/project-state.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  showProject: boolean;

  constructor(private projectStateService: ProjectStateService) {}

  ngOnInit(): void {
    this.subscribeShowProjectState();
  }

  subscribeShowProjectState() {
    this.projectStateService.isProjectDisplayed.subscribe((isDisplayed) => {
      this.showProject = isDisplayed;
    });
  }
}
