import { createSelector } from 'reselect';
import { State } from '../type';

import { RobotReducerState } from './reducer';

export function selectRobotState(state: State): RobotReducerState {
  return state.robot;
}

export const selectRobot = createSelector(selectRobotState, robot => robot);
