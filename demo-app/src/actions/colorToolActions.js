
export const REFRESH_COLORS_REQUEST_ACTION = "REFRESH_COLORS_REQUEST";
export const REFRESH_COLORS_DONE_ACTION = "REFRESH_COLORS_DONE";

export const createRefreshColorsRequestAction = () =>
  ({ type: REFRESH_COLORS_REQUEST_ACTION });

export const createRefreshColorsDoneAction = (colors) =>
  ({ type: REFRESH_COLORS_DONE_ACTION, colors });


export const refreshColors = () => {

  // this function is dispatched into the store
  return dispatch => {

    dispatch(createRefreshColorsRequestAction());
    return 

  };

};


export const ADD_COLOR_ACTION = "ADD_COLOR";

export const createAddColorAction = color => 
  ({ type: ADD_COLOR_ACTION, color });
