import { combineReducers } from 'redux';

import {
  REFRESH_CARS_DONE_ACTION,
  DELETE_CANCEL_CAR_ACTION, DELETE_REQUEST_CAR_ACTION,
  EDIT_CAR_ACTION, CANCEL_CAR_ACTION, SORT_CARS_ACTION,
} from '../actions/carToolActions';

const carList = [
  {
    id: 1, make: 'Ford', model: 'Fusion Hybrid',
    year: 2019, color: 'red', price: 45000,
  },
  {
    id: 2, make: 'Tesla', model: 'S',
    year: 2020, color: 'blue', price: 120000,
  },
];

export const carsReducer = (cars = carList, action) => {

  if (action.type === REFRESH_CARS_DONE_ACTION) {
    return action.cars;
  }

  return cars;
};

export const requestDeleteCarIdReducer = (deleteCarId = 0, action) => {

  if (action.type === DELETE_REQUEST_CAR_ACTION) {
    return action.payload.carId;
  }

  if ([
    REFRESH_CARS_DONE_ACTION,
    DELETE_CANCEL_CAR_ACTION,
  ].includes(action.type)) {
    return -1;
  }

  return deleteCarId;
}

export const editCarIdReducer = (editCarId = -1, action) => {

  if (action.type === EDIT_CAR_ACTION) {
    return action.payload.carId;
  }

  if ([
    REFRESH_CARS_DONE_ACTION,
    CANCEL_CAR_ACTION
  ].includes(action.type)) {
    return -1;
  }

  return editCarId;
};

export const carsSortReducer = (
  carsSort = { column: 'id', direction: 'asc'}, action) => {

  if (action.type === SORT_CARS_ACTION) {

    const { column } = action.payload;

    if (column !== carsSort.column) {
      return {
        ...carsSort,
        column,
        direction: 'asc', 
      };
    } else {
      if (carsSort.direction === 'asc') {
        return {
          ...carsSort,
          direction: 'desc', 
        };
      } else {
        return {
          ...carsSort,
          direction: 'asc', 
        };
      }
    }
  }

  return carsSort;
}

export const carToolReducer = combineReducers({
  cars: carsReducer,
  editCarId: editCarIdReducer,
  carsSort: carsSortReducer,
  requestDeleteCarId: requestDeleteCarIdReducer,
});