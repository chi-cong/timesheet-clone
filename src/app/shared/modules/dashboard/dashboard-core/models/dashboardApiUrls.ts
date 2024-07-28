export enum dashboardApi {
  // session api
  GetCurrLoginInfo = '/services/app/Session/GetCurrentLoginInformations',

  // project apis
  GetAllProject = '/services/app/Project/GetAll',
  DeleteProject = '/services/app/Project/Delete',
  GetFilter = '/services/app/Project/GetFilter',
  GetQuantityProject = '/services/app/Project/GetQuantityProject',
  SaveProject = '/services/app/Project/Save',
  ActiveProject = '/services/app/Project/Active',
  DeactiveProject = '/services/app/Project/Inactive',

  //project management apis
  CreateProject = '/services/app/ProjectManagement/CreateProject',

  // customer api
  GetAllCustomer = '/services/app/Customer/GetAll',

  // userApi
  GetUserNotPagging = '/services/app/User/GetUserNotPagging',

  // task api
  GetAllTask = '/services/app/Task/GetAll',

  // brach api
  getAllBrachFilter = '/services/app/Branch/GetAllBranchFilter',
}
