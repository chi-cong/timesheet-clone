export interface ISessionResp {
  application: {
    version: string;
    releaseDate: string;
    features: {
      additionalProp1: boolean;
      additionalProp2: boolean;
      additionalProp3: boolean;
    };
  };
  user: {
    name: string;
    surname: string;
    userName: string;
    emailAddress: string;
    allowedLeaveDay: number;
    type: number;
    level: number;
    sex: number;
    branch: number;
    avatarPath: string;
    avatarFullPath: string;
    morningWorking: string;
    morningStartAt: string;
    morningEndAt: string;
    afternoonWorking: string;
    afternoonStartAt: string;
    afternoonEndAt: string;
    isWorkingTimeDefault: boolean;
    branchId: number;
    id: number;
  };
  tenant: {
    tenancyName: string;
    name: string;
    id: number;
  };
}
