import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { render } from '@testing-library/react';

import Robot from './Robot';

const mockStore = configureMockStore();

describe('Robot', () => {
  it('renders when coordinates match', () => {
    const store = mockStore({
      robot: {
        x: 0,
        y: 0,
      },
    });
    const { getByTestId } = render(
      <Provider store={store}>
        <Robot id="x0y0" />
      </Provider>,
    );

    expect(getByTestId('robot')).toBeDefined();
  });
  it("doesn't render when coordinates don't match", () => {
    const store = mockStore({
      robot: {
        x: 0,
        y: 1,
      },
    });
    const { queryByTestId } = render(
      <Provider store={store}>
        <Robot id="x0y0" />
      </Provider>,
    );

    expect(queryByTestId('robot')).toEqual(null);
  });
});
