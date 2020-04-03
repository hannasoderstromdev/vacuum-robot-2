import React from 'react';
import { render } from '@testing-library/react';

import Cell from './Cell';

test('Renders not cleaned', () => {
  const { getByTestId } = render(<Cell id="0" isCleaned={false}></Cell>);
  const CellComponent = getByTestId('cell-0');
  expect(CellComponent).toBeDefined();
});

test('Renders cleaned', () => {
  const { getByTestId } = render(<Cell id="0" isCleaned={true}></Cell>);
  const CellComponent = getByTestId('cell-0');
  expect(CellComponent).toBeDefined();
});
