import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { render } from '@testing-library/react';

import App, { getRandomHeading, getRandomCoordinates, msToMinutesAndSeconds } from './App';
import { Headings } from './redux/robot/type';
import { act } from 'react-dom/test-utils';

describe('App', () => {
  describe('getRandomHeading', () => {
    it('returns a random heading', () => {
      const headings = [Headings.N, Headings.E, Headings.S, Headings.W];
      const heading = getRandomHeading();
      expect(headings.includes(heading)).toEqual(true);
    });
  });
  describe('getRandomCoordinates', () => {
    it('returns random coordinates', () => {
      const coordinates = getRandomCoordinates();
      expect(coordinates.x <= 9 && coordinates.x >= 0).toEqual(true);
      expect(coordinates.y <= 9 && coordinates.y >= 0).toEqual(true);
    });
  });
  describe('msToMinutesAndSeconds', () => {
    it('returns seconds and minutes in correct format', () => {
      expect(msToMinutesAndSeconds(121000)).toEqual('02:01');
      expect(msToMinutesAndSeconds(1235000)).toEqual('20:35');
    });
  });

  describe('rendering', () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);

    afterEach(() => jest.clearAllTimers());

    it('renders all components', () => {
      const store = mockStore({
        robot: {
          x: 0,
          y: 0,
        },
        cells: {
          x0y0: { isCleaned: true },
          x1y0: { isCleaned: false },
          x2y0: { isCleaned: false },
        },
      });
      const { getByText, getByTestId } = render(
        <Provider store={store}>
          <App />
        </Provider>,
      );

      // h1
      expect(getByText(/Cleaning Robot/i)).toBeDefined();
      // Reset button
      expect(getByText(/Reset/i)).toBeDefined();

      // Cells
      expect(getByTestId('cell-x0y0')).toBeDefined();
      expect(getByTestId('cell-x1y0')).toBeDefined();
      expect(getByTestId('cell-x2y0')).toBeDefined();

      // Robot
      expect(getByTestId('robot')).toBeDefined();

      // Meta
      expect(getByText(/Time spent: 00:00/i)).toBeDefined();
      expect(getByText(/Cells cleaned: 1\/100/i)).toBeDefined();
    });

    it('updates with time', () => {
      jest.useFakeTimers();
      const store = mockStore({
        robot: {
          x: 0,
          y: 0,
        },
        cells: {
          x0y0: { isCleaned: true },
          x1y0: { isCleaned: false },
          x2y0: { isCleaned: false },
        },
      });
      const { getByText } = render(
        <Provider store={store}>
          <App />
        </Provider>,
      );
      act(() => jest.advanceTimersByTime(3000));

      expect(getByText(/Time spent: 00:03/i)).toBeDefined();
    });
  });
});
