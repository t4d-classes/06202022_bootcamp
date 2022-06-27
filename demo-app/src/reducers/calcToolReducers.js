import { combineReducers } from "redux";

import {
  ADD_ACTION, SUBTRACT_ACTION, MULTIPLY_ACTION, DIVIDE_ACTION,
  CLEAR_ACTION, SET_ERROR_MESSAGE_ACTION, DELETE_HISTORY_ENTRY_ACTION,
} from "../actions/calcToolActions";

export const resultReducer = (result = 0, action) => {

  switch (action.type) {
    case ADD_ACTION:
      return result + action.value;
    case SUBTRACT_ACTION:
      return result - action.value;
    case MULTIPLY_ACTION:
      return result * action.value;
    case DIVIDE_ACTION:
      return result / action.value;
    case CLEAR_ACTION:
      return 0;
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

  if ([
    ADD_ACTION, SUBTRACT_ACTION,
    MULTIPLY_ACTION, DIVIDE_ACTION,
  ].includes(action.type)) {
    return [
      ...history,
      {
        id: Math.max(...history.map(he => he.id), 0) + 1,
        opName: action.type.toLowerCase(),
        opValue: action.value
      }
    ];    
  }

  if (action.type === DELETE_HISTORY_ENTRY_ACTION) {
    return history.filter(historyEntry =>
      historyEntry.id !== action.historyEntryId);
  }

  if (action.type === CLEAR_ACTION) {
    return [];
  }

  return history;

};

export const errorMessageReducer = (errorMessage = '', action) => {

  if (action.type === SET_ERROR_MESSAGE_ACTION) {
    return action.message;
  }

  if ([
    ADD_ACTION, SUBTRACT_ACTION,
    MULTIPLY_ACTION, DIVIDE_ACTION,
    CLEAR_ACTION, DELETE_HISTORY_ENTRY_ACTION,
  ].includes(action.type)) {
    return '';
  }

  return errorMessage;
}

export const calcToolReducer = combineReducers({
  result: resultReducer,
  history: historyReducer,
  errorMessage: errorMessageReducer,
});