export enum ProjectMenuActions {
  Edit = 'edit',
  View = 'view',
  Active = 'active',
  Deactive = 'deactive',
  Delete = 'delete',
}

export type AllProjecActions =
  | ProjectMenuActions.Active
  | ProjectMenuActions.Edit
  | ProjectMenuActions.Delete
  | ProjectMenuActions.Deactive
  | ProjectMenuActions.View;
