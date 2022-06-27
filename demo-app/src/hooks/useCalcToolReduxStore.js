import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import {
  createAddAction, createSubtractAction, createMultiplyAction,
  createDivideAction, createClearAction, createDeleteHistoryEntryAction
} from '../actions/calcToolActions';



export const useCalcToolReduxStore = () => {

  const result = useSelector(state => {
    
    let r = 0;

    state.history.forEach(historyEntry => {
      switch (historyEntry.opName) {
        case "add":
          r += historyEntry.opValue;
          break;
        case "subtract":
          r -= historyEntry.opValue;
          break;
        case "multiply":
          r *= historyEntry.opValue;
          break;
        case "divide":
          r /= historyEntry.opValue;
          break;
        default:
          break;
      }

    });

    return r;

  });
  const history = useSelector(state => state.history);
  const errorMessage = useSelector(state => state.errorMessage);
  
  const dispatch = useDispatch();

  const boundActions = bindActionCreators({
    add: createAddAction,
    subtract: createSubtractAction,
    multiply: createMultiplyAction,
    divide: createDivideAction,
    clear: createClearAction,
    deleteHistoryEntry: createDeleteHistoryEntryAction
  }, dispatch);

  // boundActions =
  // {
  //   onAdd: (value) => dispatch(createAddAction(value)),
  //   onSubtract: (value) => dispatch(createSubtractAction(value)),
  // }

  return {
    ...boundActions,
    // result: result,
    result,
    history,
    errorMessage,
  };

};