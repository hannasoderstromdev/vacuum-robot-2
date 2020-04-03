import { createSelector } from 'reselect';
import { State } from '../type';

import { CellsReducerState } from './reducer';

function selectCellState(state: State): CellsReducerState {
  return state.cells;
}

function numberOfCellsCleaned(state: State): number {
  let numberOfCleanedCells = 0;
  Object.values(state.cells).forEach(cell => {
    if (cell.isCleaned) numberOfCleanedCells++;
  });
  return numberOfCleanedCells;
}

export const selectCells = createSelector(selectCellState, cells => cells);

export const selectNumberOfCellsCleaned = createSelector(numberOfCellsCleaned, number => number);
