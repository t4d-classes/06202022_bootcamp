
import { allColors, appendColor, removeColor } from "../services/colorsData";

export const REFRESH_COLORS_REQUEST_ACTION = "REFRESH_COLORS_REQUEST";
export const REFRESH_COLORS_DONE_ACTION = "REFRESH_COLORS_DONE";

export const createRefreshColorsRequestAction = () =>
  ({ type: REFRESH_COLORS_REQUEST_ACTION });

export const createRefreshColorsDoneAction = (colors) =>
  ({ type: REFRESH_COLORS_DONE_ACTION, colors });


export const refreshColors = () => {

  // this function is dispatched into the store
  return async dispatch => {
    dispatch(createRefreshColorsRequestAction());
    const colors = await allColors();
    dispatch(createRefreshColorsDoneAction(colors));
  };

};


export const ADD_COLOR_REQUEST_ACTION = "ADD_COLOR_REQUEST";

export const createAddColorRequestAction = color => 
  ({ type: ADD_COLOR_REQUEST_ACTION, color });

export const addColor = (color) => {

  // this function is dispatched into the store
  return async dispatch => {
    dispatch(createAddColorRequestAction());
    await appendColor(color);
    dispatch(refreshColors());
  };

};
  
export const DELETE_COLOR_REQUEST_ACTION = "DELETE_COLOR_REQUEST";

export const createDeleteColorRequestAction = colorId => 
  ({ type: DELETE_COLOR_REQUEST_ACTION, colorId });

export const deleteColor = (colorId) => {

  // this function is dispatched into the store
  return async dispatch => {
    dispatch(createDeleteColorRequestAction());
    await removeColor(colorId);
    dispatch(refreshColors());
  };

};
