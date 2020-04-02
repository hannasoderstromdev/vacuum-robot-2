export const SET_COORDINATES = "SET_COORDINATES";

export interface Coordinates {
  x: number;
  y: number;
}

export interface SetCoordinates {
  type: typeof SET_COORDINATES;
  payload: Coordinates;
}


export type RobotActionTypes = Coordinates | SetCoordinates

export enum Headings {
  N = 'N',
  E = 'E',
  S = 'S',
  W = 'W',
}
