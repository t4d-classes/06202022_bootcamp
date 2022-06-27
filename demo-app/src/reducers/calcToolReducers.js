import { combineReducers } from "redux";

import {
  ADD_ACTION, SUBTRACT_ACTION, MULTIPLY_ACTION, DIVIDE_ACTION,
  CLEAR_ACTION, SET_ERROR_MESSAGE_ACTION, DELETE_HISTORY_ENTRY_ACTION,
} from "../actions/calcToolActions";

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
  history: historyReducer,
  errorMessage: errorMessageReducer,
});