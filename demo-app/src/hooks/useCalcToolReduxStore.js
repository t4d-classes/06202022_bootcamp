import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import {
  createAddAction, createSubtractAction, createMultiplyAction,
  createDivideAction, createClearAction,
} from '../actions/calcToolActions';



export const useCalcToolReduxStore = () => {

  const result = useSelector(state => state.result);
  const history = useSelector(state => state.history);
  
  const dispatch = useDispatch();

  const boundActions = bindActionCreators({
    add: createAddAction,
    subtract: createSubtractAction,
    multiply: createMultiplyAction,
    divide: createDivideAction,
    clear: createClearAction,
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
  };

};