import { selectCells, selectNumberOfCellsCleaned } from './selectors';

describe('Cells/Selectors', () => {
  const state = {
    cells: {
      x0y0: { isCleaned: false },
      x1y0: { isCleaned: false },
      x2y0: { isCleaned: false },
      x3y0: { isCleaned: true },
    },
    robot: { x: 0, y: 0 },
  };

  describe('selectCells', () => {
    it('returns cells', () => {
      const result = {
        x0y0: { isCleaned: false },
        x1y0: { isCleaned: false },
        x2y0: { isCleaned: false },
        x3y0: { isCleaned: true },
      };

      expect(selectCells(state)).toEqual(result);
    });
  });

  describe('selectNumberOfCellsCleaned', () => {
    it('returns number of cells cleaned', () => {
      expect(selectNumberOfCellsCleaned(state)).toEqual(1);
    });
  });
});
