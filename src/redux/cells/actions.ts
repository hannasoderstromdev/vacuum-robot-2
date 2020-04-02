import { ActionsUnion } from '../type'
import { createAction } from '../action'

export enum ActionTypes {
  SET_CELL_IS_CLEANED = 'SET_CELL_IS_CLEANED',
  RESET_CELLS = 'RESET_CELLS',
}

export type Coordinates = {
  x: number
  y: number
}

export const CellsActions = {
  setCellIsCleaned: (coordinates: Coordinates) =>
    createAction(ActionTypes.SET_CELL_IS_CLEANED, coordinates),
  resetCells: () => createAction(ActionTypes.RESET_CELLS)
}

export type CellsActions = ActionsUnion<typeof CellsActions>

