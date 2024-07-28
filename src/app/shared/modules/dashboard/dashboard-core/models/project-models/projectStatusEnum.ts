export enum ProjectStatus {
  Active,
  Inactive,
  AllStatus,
}
export type AllProjectStatus =
  | ProjectStatus.Active
  | ProjectStatus.Inactive
  | ProjectStatus.AllStatus;
