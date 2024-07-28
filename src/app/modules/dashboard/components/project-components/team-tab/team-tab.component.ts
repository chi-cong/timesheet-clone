import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IApiResp } from 'src/app/core/models/apiRespInterface';
import { ISelectItem } from 'src/app/core/models/standaloneCompModels/selectItemIterface';
import { IGetBranchFilter } from 'src/app/modules/dashboard/dashboard-core/models/branchApiResp';
import { DashboardService } from 'src/app/modules/dashboard/dashboard-core/services/dashboard.service';
import { ProjectStateService } from 'src/app/modules/dashboard/dashboard-core/services/project-services/project-state.service';

import {
  UserTypes,
  UserProjectPos,
} from 'src/app/modules/dashboard/dashboard-core/models/userEnum';
import { IGetUser } from 'src/app/modules/dashboard/dashboard-core/models/userApiInterface';

@Component({
  selector: 'app-team-tab',
  templateUrl: './team-tab.component.html',
  styleUrls: ['./team-tab.component.scss'],
})
export class TeamTabComponent implements OnInit {
  @Input() fg: FormGroup;

  availableUser: IGetUser[] = [];
  displayedUser: IGetUser[] = [];
  selectedUser: IGetUser[] = [];
  branches: ISelectItem[] = [];

  userTypes: ISelectItem[] = [
    { value: UserTypes.All, viewValue: 'All' },
    { value: UserTypes.Staff, viewValue: 'Staff' },
    { value: UserTypes.Internship, viewValue: 'Internship' },
    { value: UserTypes.Collaborator, viewValue: 'Collaborator' },
  ];
  teamMember: [] = [];
  memberPositions: ISelectItem[] = [
    { value: UserProjectPos.Member, viewValue: 'Project manager' },
    { value: UserProjectPos.ProjectManager, viewValue: 'Member' },
    { value: UserProjectPos.Shadow, viewValue: 'Shadow' },
    { value: UserProjectPos.Deactive, viewValue: 'Deactive' },
  ];

  constructor(
    private dashboardService: DashboardService,
    private projectStateService: ProjectStateService
  ) {}

  ngOnInit(): void {
    this.getBranches();
    this.getAvailableMember();
    this.fg = this.projectStateService.createEditForm;
  }

  getAvailableMember() {
    this.dashboardService.getAllUserNotPagging().subscribe((data: IApiResp) => {
      this.availableUser = data.result;
      this.displayedUser = this.availableUser;
    });
  }

  getBranches() {
    this.dashboardService.getAllBranch().subscribe((data: IApiResp) => {
      const result: IGetBranchFilter[] = data.result;
      result.forEach((branch) => {
        this.branches.push({ value: branch.id, viewValue: branch.displayName });
      });
    });
  }

  selectMember(idEvent: any) {
    this.availableUser.forEach((user, index) => {
      if (idEvent === user.id) {
        this.selectedUser.push(user);
        this.availableUser.splice(index, 1);
      }
    });
  }
  removeSelectedMember(idEvent: any) {
    this.selectedUser.forEach((user, index) => {
      if (idEvent === user.id) {
        this.selectedUser.splice(index, 1);
      }
    });
  }

  searchUser(searchString: any) {
    this.displayedUser = this.availableUser.filter((user) => {
      return (
        user.name.includes(searchString) ||
        user.emailAddress.includes(searchString)
      );
    });
  }

  branchFilter(branch: any) {
    this.displayedUser = this.displayedUser.filter((user) => {
      return user.branchId === branch;
    });
  }
  typeFilter(type: any) {
    this.displayedUser = this.availableUser;
    this.displayedUser = this.displayedUser.filter((user) => {
      if (type === UserTypes.All) {
        return this.availableUser;
      }
      return user.type === type;
    });
  }

  patchUserListToForm() {
    let patchedList: { userId: number; type: number }[] = [];
    this.selectedUser.forEach((user) => {
      patchedList.push({ userId: user.id, type: user.type });
    });
    this.fg.patchValue({ users: patchedList });
  }
}
