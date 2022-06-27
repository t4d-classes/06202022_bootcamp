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

// slice
// reducer functions need to be pure functions
// 1. the only data used in the function comes from the parameters
// 2. the parameters are immutable
// 3. cannot perform side effects
// 4. the only output value is the return value from the function
export const historyReducer = (history = [], action) => {

  if ([ADD_ACTION, SUBTRACT_ACTION].includes(action.type)) {
    return [
      ...history,
      {
        id: Math.max(...history.map(he => he.id), 0) + 1,
        opName: action.type.toLowerCase(),
        opValue: action.value
      }
    ];    
  }

  return history;

};

export const calcToolReducer = combineReducers({
  result: resultReducer,
  history: historyReducer,
});