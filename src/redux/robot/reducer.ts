import { ActionTypes, RobotActions } from './actions';
import { getRandomCoordinates } from '../../App';

export type RobotReducerState = {
  x: number;
  y: number;
};

const initialState: Readonly<RobotReducerState> = getRandomCoordinates();

function reducer(state: RobotReducerState = initialState, action: RobotActions): RobotReducerState {
  switch (action.type) {
    case ActionTypes.SET_COORDINATES:
      const { x, y } = action.payload;
      return {
        x,
        y,
      };

    default:
      return state;
  }
}

export { reducer };
