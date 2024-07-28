export enum UserTypes {
  Staff,
  Internship,
  Collaborator,
  All,
}

export type allUserType =
  | UserTypes.Staff
  | UserTypes.Internship
  | UserTypes.Collaborator;

export enum UserProjectPos {
  Member,
  ProjectManager,
  Shadow,
  Deactive,
}
