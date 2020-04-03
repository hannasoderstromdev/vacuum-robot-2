import { selectRobot } from './selectors';

describe('Robot/Selectors', () => {
  const state = {
    cells: {
      x0y0: { isCleaned: false },
      x1y0: { isCleaned: false },
      x2y0: { isCleaned: false },
      x3y0: { isCleaned: true },
    },
    robot: { x: 0, y: 0 },
  };

  describe('selectRobot', () => {
    it('returns robot coordinates', () => {
      const result = {
        x: 0,
        y: 0,
      };

      expect(selectRobot(state)).toEqual(result);
    });
  });
});
