import { combineReducers, Reducer } from "redux";

import { Actions, State } from "./type";
import { reducer as robot } from "./robot";
import { reducer as cells } from "./cells";

export const reducer: Reducer<State, Actions> = combineReducers({ cells, robot });
