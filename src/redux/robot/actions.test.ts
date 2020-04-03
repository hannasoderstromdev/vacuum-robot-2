import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { move } from './actions';
import { Headings } from './type';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Robot/actions', () => {
  describe('move', () => {
    it('handles heading N in bounds y', () => {
      const store = mockStore({
        robot: {
          x: 0,
          y: 1,
        },
      });
      store.dispatch(move({ heading: Headings.N }));
      const actions = [
        { payload: { x: 0, y: 0 }, type: 'SET_COORDINATES' },
        { payload: { x: 0, y: 0 }, type: 'SET_CELL_IS_CLEANED' },
      ];
      expect(store.getActions()).toEqual(actions);
    });

    it('handles heading N out of bounds y', () => {
      const store = mockStore({
        robot: {
          x: 0,
          y: 0,
        },
      });
      store.dispatch(move({ heading: Headings.N }));
      const actions = [];
      expect(store.getActions()).toEqual(actions);
    });

    it('handles heading E in bounds x', () => {
      const store = mockStore({
        robot: {
          x: 0,
          y: 0,
        },
      });
      store.dispatch(move({ heading: Headings.E }));
      const actions = [
        { payload: { x: 1, y: 0 }, type: 'SET_COORDINATES' },
        { payload: { x: 1, y: 0 }, type: 'SET_CELL_IS_CLEANED' },
      ];
      expect(store.getActions()).toEqual(actions);
    });

    it('handles heading E out of bounds x', () => {
      const store = mockStore({
        robot: {
          x: 9,
          y: 0,
        },
      });
      store.dispatch(move({ heading: Headings.E }));
      const actions = [];
      expect(store.getActions()).toEqual(actions);
    });

    it('handles heading S in bounds y', () => {
      const store = mockStore({
        robot: {
          x: 0,
          y: 0,
        },
      });
      store.dispatch(move({ heading: Headings.S }));
      const actions = [
        { payload: { x: 0, y: 1 }, type: 'SET_COORDINATES' },
        { payload: { x: 0, y: 1 }, type: 'SET_CELL_IS_CLEANED' },
      ];
      expect(store.getActions()).toEqual(actions);
    });

    it('handles heading S out of bounds y', () => {
      const store = mockStore({
        robot: {
          x: 0,
          y: 9,
        },
      });
      store.dispatch(move({ heading: Headings.S }));
      const actions = [];
      expect(store.getActions()).toEqual(actions);
    });

    it('handles heading W in bounds x', () => {
      const store = mockStore({
        robot: {
          x: 1,
          y: 0,
        },
      });
      store.dispatch(move({ heading: Headings.W }));
      const actions = [
        { payload: { x: 0, y: 0 }, type: 'SET_COORDINATES' },
        { payload: { x: 0, y: 0 }, type: 'SET_CELL_IS_CLEANED' },
      ];
      expect(store.getActions()).toEqual(actions);
    });

    it('handles heading W out of bounds x', () => {
      const store = mockStore({
        robot: {
          x: 0,
          y: 0,
        },
      });
      store.dispatch(move({ heading: Headings.W }));
      const actions = [];
      expect(store.getActions()).toEqual(actions);
    });
  });
});
