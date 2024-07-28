import { ProjectStatus } from './projectStatusEnum';

export interface IGetProjectResp {
  customerName: string;
  name: string;
  code: string;
  status: number;
  pms: string[];
  activeMember: number;
  projectType: number;
  timeStart: string | Date;
  timeEnd: string | Date;
  id: number;
}

export interface ISaveProject {
  name: string;
  code: string;
  status: number;
  timeStart: string;
  timeEnd: string;
  note: string;
  projectType: number;
  customerId: number;
  tasks: {
    taskId: number;
    billable: boolean;
    id: number;
  }[];
  users: {
    userId: number;
    type: number;
  }[];
  projectTargetUsers: {
    userId: number;
    roleName: string;
    id: number;
  }[];
  komuChannelId: string;
  isNotifyToKomu: boolean;
  isAllUserBelongTo: boolean;
  id: number;
}

export interface IProjectQuantity {
  status: ProjectStatus.Active | ProjectStatus.Inactive;
  quantity: number;
}
