import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { render } from '@testing-library/react';

import Room from './Room';

const mockStore = configureMockStore();

describe('Room', () => {
  it('renders cells and robot', () => {
    const store = mockStore({
      robot: {
        x: 0,
        y: 0,
      },
      cells: {
        x0y0: { isCleaned: false },
        x1y0: { isCleaned: false },
        x2y0: { isCleaned: true },
      },
    });
    const { getByTestId } = render(
      <Provider store={store}>
        <Room />
      </Provider>,
    );

    expect(getByTestId('robot')).toBeDefined();
    expect(getByTestId('cell-x0y0')).toBeDefined();
    expect(getByTestId('cell-x1y0')).toBeDefined();
    expect(getByTestId('cell-x2y0')).toBeDefined();
  });
});
