import { ActionsUnion, DispatchAction } from '../type';
import { createAction } from '../action';
import { CellsActions } from '../cells/actions';

import { Headings } from './type';

export enum ActionTypes {
  SET_COORDINATES = 'SET_COORDINATES',
}

export type CoordinatesObj = {
  [key: string]: Coordinates;
};

export type Coordinates = {
  x: number;
  y: number;
};

export type Heading = {
  heading: Headings.N | Headings.E | Headings.S | Headings.W;
};

export const RobotActions = {
  setCoordinates: (coordinates: Coordinates) => createAction(ActionTypes.SET_COORDINATES, coordinates),
};

export type RobotActions = ActionsUnion<typeof RobotActions>;

export function move({ heading }: Heading): DispatchAction {
  return async (dispatch, getState) => {
    const { x, y } = getState().robot;

    // make sure move in set heading doesn't go out of bounds

    const newPosition = {
      x,
      y,
    };

    if (heading === Headings.S) {
      if (y < 9) {
        newPosition.y++;
      }
    }

    if (heading === Headings.E) {
      if (x < 9) {
        newPosition.x++;
      }
    }

    if (heading === Headings.N) {
      if (y > 0) {
        newPosition.y--;
      }
    }

    if (heading === Headings.W) {
      if (x > 0) {
        newPosition.x--;
      }
    }

    // No need to dispatch if robot hasn't moved
    if (x !== newPosition.x || y !== newPosition.y) {
      dispatch(RobotActions.setCoordinates(newPosition));
      dispatch(CellsActions.setCellIsCleaned(newPosition));
    }
  };
}
