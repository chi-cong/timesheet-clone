import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// models
import {
  AllProjectStatus,
  ProjectStatus,
} from '../../models/project-models/projectStatusEnum';
import { IGetProjectResp } from '../../models/project-models/ProjectApiRespInterface';
import { IGetAllClient } from '../../models/customerApiResp';
import {
  AllProjectFormAction,
  ProjectFormAction,
} from '../../models/project-models/projectFormActions';
import { ValidationStates } from 'src/app/core/models/validationStateEnum';
import { ProjectTypes } from '../../models/project-models/projectTypes';

@Injectable({
  providedIn: 'root',
})
export class ProjectStateService {
  displayedProjectStatus: BehaviorSubject<AllProjectStatus> =
    new BehaviorSubject<AllProjectStatus>(ProjectStatus.Active);
  currProjectSearch: BehaviorSubject<string> = new BehaviorSubject<string>('');

  projectList: BehaviorSubject<IGetProjectResp[][] | null> =
    new BehaviorSubject<IGetProjectResp[][] | null>(null);

  customerList: BehaviorSubject<IGetAllClient[] | null> = new BehaviorSubject<
    IGetAllClient[] | null
  >(null);

  projecFormAction: BehaviorSubject<AllProjectFormAction> =
    new BehaviorSubject<AllProjectFormAction>(ProjectFormAction.Adding);

  formValidation: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    true
    // true = invalid, false = valid
  );

  currHandledProjectId: BehaviorSubject<number | null> = new BehaviorSubject<
    number | null
  >(null);

  createEditForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    code: ['', [Validators.required]],
    status: 0,
    timeStart: ['', [Validators.required]],
    timeEnd: ['', [Validators.required]],
    note: '',
    projectType: ProjectTypes.FF,
    customerId: 0,
    tasks: [],
    users: [],
    projectTargetUsers: [],
    komuChannelId: '',
    isNotifyToKomu: false,
    isAllUserBelongTo: false,
    id: null,
  });

  isProjectDisplayed: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    true
  );

  constructor(private fb: FormBuilder) {}

  updateDisplayedProjectStatus(status: AllProjectStatus) {
    this.displayedProjectStatus.next(status);
  }

  updateCurrProjectSearch(search: string) {
    this.currProjectSearch.next(search);
  }

  updateProjectList(
    customers?: IGetAllClient[] | null,
    projects?: IGetProjectResp[] | null
  ) {
    if (!customers || !projects) {
      this.projectList.next(null);
      return;
    }
    let temp2DimensionArr: IGetProjectResp[][] = [];
    let temp1DimensionArr: IGetProjectResp[] = [];

    projects.sort((a, b) => {
      const clientA = a.customerName;
      const clientB = b.customerName;
      if (clientA < clientB) return -1;
      return 1;
    });
    customers.sort((a, b) => {
      const clientA = a.name;
      const clientB = b.name;
      if (clientA < clientB) return -1;
      return 1;
    });

    // group project by client
    // this func doesnt using forEach for better optimization
    let PIndexStart = 0;
    for (let CIndex = 0; CIndex < customers.length; CIndex++) {
      for (let PIndex = PIndexStart; PIndex < projects.length; PIndex++) {
        if (customers[CIndex].name === projects[PIndex].customerName) {
          temp1DimensionArr.push(projects[PIndex]);
        } else if (customers[CIndex].name !== projects[PIndex].customerName) {
          PIndexStart = PIndex;
          if (temp1DimensionArr.length) {
            temp2DimensionArr.push(temp1DimensionArr);
          }
          temp1DimensionArr = [];
          break;
        }
      }
    }

    this.projectList.next(temp2DimensionArr);
  }

  updateClientList(newList: IGetAllClient[]) {
    this.customerList.next(newList);
  }

  updateformValidation(status: string) {
    if (status === ValidationStates.Invalidation) {
      this.formValidation.next(true);
    } else {
      this.formValidation.next(false);
    }
  }

  updateProjectDisplayerState(isDisplayed: boolean) {
    this.isProjectDisplayed.next(isDisplayed);
  }
}
