import { reducer } from './reducer'
import { RobotActions, ActionTypes } from './actions'

test(`${RobotActions.setCoordinates} sets coordinates and updates cleaned`, () => {
  const action = {
    type: ActionTypes.SET_COORDINATES,
    payload: { x: 1, y: 2, },
  }
  const result = {
    x: 1,
    y: 2,
  }

  expect(
    reducer({ x: 0, y: 0 }, action)
  ).toEqual(result)
})
