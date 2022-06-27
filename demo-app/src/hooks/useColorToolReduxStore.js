import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import {
  createAddColorAction
} from '../actions/colorToolActions';



export const useColorToolReduxStore = () => {

  const colors = useSelector(state => state.colors);
  
  const dispatch = useDispatch();

  const boundActions = bindActionCreators({
    addColor: createAddColorAction,
  }, dispatch);

  return {
    ...boundActions,
    colors,
  };

};