import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import {
  addColor, refreshColors
} from '../actions/colorToolActions';



export const useColorToolReduxStore = () => {

  const colors = useSelector(state => state.colors);
  
  const dispatch = useDispatch();

  const boundActions = useMemo(() => bindActionCreators({
    refreshColors,
    addColor,
  }, dispatch), [dispatch]);

  useEffect(() => {

    boundActions.refreshColors();

  }, [boundActions]);

  return {
    ...boundActions,
    colors,
  };

};