export interface StatusModel {
  velocity?: number;
  altitude?: number;
  temperature?: number;
  statusMessage?: string;
  isAscending?: boolean;
  isActionRequired?: boolean;
}
