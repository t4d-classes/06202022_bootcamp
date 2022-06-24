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

export const calcToolReducer = combineReducers({
  result: resultReducer,
});