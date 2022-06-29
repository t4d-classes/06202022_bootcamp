import {
  allCars, appendCar, replaceCar, removeCar,
} from "../services/carsData";

export const REFRESH_CARS_REQUEST_ACTION = "REFRESH_CARS_REQUEST";
export const REFRESH_CARS_DONE_ACTION = "REFRESH_CARS_DONE";

export const createRefreshCarsRequestAction = () =>
  ({ type: REFRESH_CARS_REQUEST_ACTION });

export const createRefreshCarsDoneAction = (cars) =>
  ({ type: REFRESH_CARS_DONE_ACTION, cars });


export const refreshCars = () => {

  // this function is dispatched into the store
  return async dispatch => {
    dispatch(createRefreshCarsRequestAction());
    const cars = await allCars();
    dispatch(createRefreshCarsDoneAction(cars));
  };

};


export const ADD_CAR_REQUEST_ACTION = "ADD_CAR_REQUEST";

export const createAddCarRequestAction = car => 
  ({ type: ADD_CAR_REQUEST_ACTION, car });

export const addCar = (car) => {

  // this function is dispatched into the store
  return async dispatch => {
    dispatch(createAddCarRequestAction());
    await appendCar(car);
    dispatch(refreshCars());
  };

};


export const SAVE_COLOR_REQUEST_ACTION = "SAVE_COLOR_REQUEST";

export const createSaveCarRequestAction = car => 
  ({ type: SAVE_COLOR_REQUEST_ACTION, car });

export const saveCar = (car) => {

  // this function is dispatched into the store
  return async dispatch => {
    dispatch(createSaveCarRequestAction(car));
    await replaceCar(car);
    dispatch(refreshCars());
  };

};


export const DELETE_CONFIRM_CAR_REQUEST_ACTION = 'DELETE_CONFIRM_CAR_REQUEST';

export const createDeleteConfirmCarRequestAction = carId => ({
  type: DELETE_CONFIRM_CAR_REQUEST_ACTION, payload: { carId },
});

export const deleteConfirmCar = (carId) => {

  // this function is dispatched into the store
  return async dispatch => {
    dispatch(createDeleteConfirmCarRequestAction());
    await removeCar(carId);
    dispatch(refreshCars());
  };

};



export const DELETE_REQUEST_CAR_ACTION = 'DELETE_REQUEST_CAR';
export const DELETE_CANCEL_CAR_ACTION = 'DELETE_CANCEL_CAR';
export const EDIT_CAR_ACTION = 'EDIT_CAR';
export const CANCEL_CAR_ACTION = 'CANCEL_CAR';
export const SORT_CARS_ACTION = 'SORT_CARS';


export const createDeleteRequestCarAction = carId => ({
  type: DELETE_REQUEST_CAR_ACTION, payload: { carId },
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