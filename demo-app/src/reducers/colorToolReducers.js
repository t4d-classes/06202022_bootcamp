import { combineReducers } from "redux"


import { REFRESH_COLORS_DONE_ACTION } from "../actions/colorToolActions"


export const colorsReducer = (colors = [], action) => {

  if (action.type === REFRESH_COLORS_DONE_ACTION) {
    return action.colors;
  }

  return colors;
};


export const colorToolReducer = combineReducers({
  colors: colorsReducer,
});