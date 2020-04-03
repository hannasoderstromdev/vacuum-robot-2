import { reducer, generateCells } from './reducer';
import { CellsActions, ActionTypes } from './actions';

describe('Cells/reducer', () => {
  describe('generateCells', () => {
    it('generates 100 cells', () => {
      const cells = generateCells();
      expect(Object.keys(cells).length).toEqual(100);
    });

    test(`${CellsActions.setCellIsCleaned} sets cell as isCleaned`, () => {
      const initialState = {
        x0y0: { isCleaned: false },
        x1y0: { isCleaned: false },
      };
      const action = {
        type: ActionTypes.SET_CELL_IS_CLEANED,
        payload: { x: 0, y: 0 },
      };
      const result = {
        x0y0: {
          isCleaned: true,
        },
        x1y0: {
          isCleaned: false,
        },
      };

      expect(reducer(initialState, action)).toEqual(result);
    });

    test(`${CellsActions.resetCells} sets cell as generated initialState`, () => {
      const prevState = {
        x0y0: { isCleaned: true },
        x1y0: { isCleaned: true },
      };
      const action = {
        type: ActionTypes.RESET_CELLS,
      };
      const result = {
        x0y0: {
          isCleaned: false,
        },
        x0y1: {
          isCleaned: false,
        },
        x0y2: {
          isCleaned: false,
        },
        x0y3: {
          isCleaned: false,
        },
        x0y4: {
          isCleaned: false,
        },
        x0y5: {
          isCleaned: false,
        },
        x0y6: {
          isCleaned: false,
        },
        x0y7: {
          isCleaned: false,
        },
        x0y8: {
          isCleaned: false,
        },
        x0y9: {
          isCleaned: false,
        },
        x1y0: {
          isCleaned: false,
        },
        x1y1: {
          isCleaned: false,
        },
        x1y2: {
          isCleaned: false,
        },
        x1y3: {
          isCleaned: false,
        },
        x1y4: {
          isCleaned: false,
        },
        x1y5: {
          isCleaned: false,
        },
        x1y6: {
          isCleaned: false,
        },
        x1y7: {
          isCleaned: false,
        },
        x1y8: {
          isCleaned: false,
        },
        x1y9: {
          isCleaned: false,
        },
        x2y0: {
          isCleaned: false,
        },
        x2y1: {
          isCleaned: false,
        },
        x2y2: {
          isCleaned: false,
        },
        x2y3: {
          isCleaned: false,
        },
        x2y4: {
          isCleaned: false,
        },
        x2y5: {
          isCleaned: false,
        },
        x2y6: {
          isCleaned: false,
        },
        x2y7: {
          isCleaned: false,
        },
        x2y8: {
          isCleaned: false,
        },
        x2y9: {
          isCleaned: false,
        },
        x3y0: {
          isCleaned: false,
        },
        x3y1: {
          isCleaned: false,
        },
        x3y2: {
          isCleaned: false,
        },
        x3y3: {
          isCleaned: false,
        },
        x3y4: {
          isCleaned: false,
        },
        x3y5: {
          isCleaned: false,
        },
        x3y6: {
          isCleaned: false,
        },
        x3y7: {
          isCleaned: false,
        },
        x3y8: {
          isCleaned: false,
        },
        x3y9: {
          isCleaned: false,
        },
        x4y0: {
          isCleaned: false,
        },
        x4y1: {
          isCleaned: false,
        },
        x4y2: {
          isCleaned: false,
        },
        x4y3: {
          isCleaned: false,
        },
        x4y4: {
          isCleaned: false,
        },
        x4y5: {
          isCleaned: false,
        },
        x4y6: {
          isCleaned: false,
        },
        x4y7: {
          isCleaned: false,
        },
        x4y8: {
          isCleaned: false,
        },
        x4y9: {
          isCleaned: false,
        },
        x5y0: {
          isCleaned: false,
        },
        x5y1: {
          isCleaned: false,
        },
        x5y2: {
          isCleaned: false,
        },
        x5y3: {
          isCleaned: false,
        },
        x5y4: {
          isCleaned: false,
        },
        x5y5: {
          isCleaned: false,
        },
        x5y6: {
          isCleaned: false,
        },
        x5y7: {
          isCleaned: false,
        },
        x5y8: {
          isCleaned: false,
        },
        x5y9: {
          isCleaned: false,
        },
        x6y0: {
          isCleaned: false,
        },
        x6y1: {
          isCleaned: false,
        },
        x6y2: {
          isCleaned: false,
        },
        x6y3: {
          isCleaned: false,
        },
        x6y4: {
          isCleaned: false,
        },
        x6y5: {
          isCleaned: false,
        },
        x6y6: {
          isCleaned: false,
        },
        x6y7: {
          isCleaned: false,
        },
        x6y8: {
          isCleaned: false,
        },
        x6y9: {
          isCleaned: false,
        },
        x7y0: {
          isCleaned: false,
        },
        x7y1: {
          isCleaned: false,
        },
        x7y2: {
          isCleaned: false,
        },
        x7y3: {
          isCleaned: false,
        },
        x7y4: {
          isCleaned: false,
        },
        x7y5: {
          isCleaned: false,
        },
        x7y6: {
          isCleaned: false,
        },
        x7y7: {
          isCleaned: false,
        },
        x7y8: {
          isCleaned: false,
        },
        x7y9: {
          isCleaned: false,
        },
        x8y0: {
          isCleaned: false,
        },
        x8y1: {
          isCleaned: false,
        },
        x8y2: {
          isCleaned: false,
        },
        x8y3: {
          isCleaned: false,
        },
        x8y4: {
          isCleaned: false,
        },
        x8y5: {
          isCleaned: false,
        },
        x8y6: {
          isCleaned: false,
        },
        x8y7: {
          isCleaned: false,
        },
        x8y8: {
          isCleaned: false,
        },
        x8y9: {
          isCleaned: false,
        },
        x9y0: {
          isCleaned: false,
        },
        x9y1: {
          isCleaned: false,
        },
        x9y2: {
          isCleaned: false,
        },
        x9y3: {
          isCleaned: false,
        },
        x9y4: {
          isCleaned: false,
        },
        x9y5: {
          isCleaned: false,
        },
        x9y6: {
          isCleaned: false,
        },
        x9y7: {
          isCleaned: false,
        },
        x9y8: {
          isCleaned: false,
        },
        x9y9: {
          isCleaned: false,
        },
      };

      expect(reducer(prevState, action)).toEqual(result);
    });
  });
});
