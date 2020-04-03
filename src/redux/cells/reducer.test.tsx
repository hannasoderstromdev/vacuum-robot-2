import { generateCells } from './reducer';

describe('generateCells', () => {
  it('generates 100 cells', () => {
    const cells = generateCells();
    expect(Object.keys(cells).length).toEqual(100);
  });
});
