import { combineReducers } from "redux"


import { ADD_COLOR_ACTION } from "../actions/colorToolActions"


export const colorsReducer = (colors = [], action) => {

  if (action.type === ADD_COLOR_ACTION) {
    return [
      ...colors,
      {
        ...action.color,
        id: Math.max(...colors.map(c => c.id), 0) + 1,
      }
    ]
  }

  return colors;

};


export const colorToolReducer = combineReducers({
  colors: colorsReducer,
});