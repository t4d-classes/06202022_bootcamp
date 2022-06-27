import { combineReducers } from "redux";

import { ADD_ACTION, SUBTRACT_ACTION } from "../actions/calcToolActions";

export const resultReducer = (result = 0, action) => {

  switch (action.type) {
    case ADD_ACTION:
      return result + action.value;
    case SUBTRACT_ACTION:
      return result - action.value;
    default:
      return result;
  }

};

export const historyReducer = (history = [], action) => {

  switch (action.type) {
    case ADD_ACTION:
      return [
        ...history,
        {
          id: Math.max(...history.map(he => he.id), 0) + 1,
          opName: 'add',
          opValue: action.value
        }
      ];
    case SUBTRACT_ACTION:
      return [
        ...history,
        {
          id: Math.max(...history.map(he => he.id), 0) + 1,
          opName: 'subtract',
          opValue: action.value
        }
      ];
    default:
      return history;
  }

};

export const calcToolReducer = combineReducers({
  result: resultReducer,
  history: historyReducer,
});