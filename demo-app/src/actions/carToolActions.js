export const ADD_CAR_ACTION = 'ADD_CAR';
export const SAVE_CAR_ACTION = 'SAVE_CAR';
export const DELETE_REQUEST_CAR_ACTION = 'DELETE_REQUEST_CAR';
export const DELETE_CANCEL_CAR_ACTION = 'DELETE_CANCEL_CAR';
export const DELETE_CONFIRM_CAR_ACTION = 'DELETE_CONFIRM_CAR';
export const EDIT_CAR_ACTION = 'EDIT_CAR';
export const CANCEL_CAR_ACTION = 'CANCEL_CAR';
export const SORT_CARS_ACTION = 'SORT_CARS';

export const createAddCarAction = car => ({
  type: ADD_CAR_ACTION, payload: { car },
});

export const createSaveCarAction = car => ({
  type: SAVE_CAR_ACTION, payload: { car },
});

export const createDeleteRequestCarAction = carId => ({
  type: DELETE_REQUEST_CAR_ACTION, payload: { carId },
});

export const createDeleteConfirmCarAction = carId => ({
  type: DELETE_CONFIRM_CAR_ACTION, payload: { carId },
});

export const createDeleteCancelCarAction = () => ({
  type: DELETE_CANCEL_CAR_ACTION,
});

export const createEditCarAction = carId => ({
  type: EDIT_CAR_ACTION, payload: { carId },
});

export const createCancelCarAction = () => ({
  type: CANCEL_CAR_ACTION,
});

export const createSortCarsAction = (column) => ({
  type: SORT_CARS_ACTION, payload: { column },
});