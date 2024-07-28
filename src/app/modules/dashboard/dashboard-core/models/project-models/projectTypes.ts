export enum ProjectTypes {
  TM,
  FF,
  NB,
  ODC,
  P,
  T,
}
export type AllProjectType =
  | ProjectTypes.TM
  | ProjectTypes.FF
  | ProjectTypes.NB
  | ProjectTypes.ODC
  | ProjectTypes.P
  | ProjectTypes.T;
