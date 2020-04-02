import { ActionTypes, CellsActions } from './actions'

export type CellsReducerState = {
  [key: string]: { isCleaned: boolean }
}

export function generateCells(): CellsReducerState {
  let cells = {}
  let x = 0
  let y = 0

  for (let index = 0; index < 100; index++) {
    cells = {
      ...cells,
      [`x${x}y${y}`]: { isCleaned: false },
    }
    if (x < 9) {
      x++
    } else {
      y++
      x = 0
    }
  }
  return cells
}

const initialState: Readonly<CellsReducerState> = generateCells()

export function reducer(
  state: CellsReducerState = initialState,
  action: CellsActions
): CellsReducerState {
  switch (action.type) {
    case ActionTypes.SET_CELL_IS_CLEANED:
      const { x, y } = action.payload
      return {
        ...state,
        [`x${x}y${y}`]: { isCleaned: true },
      }

    case ActionTypes.RESET_CELLS:
      return initialState

    default:
      return state
  }
}
