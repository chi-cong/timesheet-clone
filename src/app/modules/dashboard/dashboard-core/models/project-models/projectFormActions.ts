export enum ProjectFormAction {
  Adding = 'Adding',
  Editing = 'Editing',
}

export type AllProjectFormAction =
  | ProjectFormAction.Adding
  | ProjectFormAction.Editing;
