import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';

import {
  selectSortedCars,
  selectCarsSort,
  selectEditCarId,
  selectRequestDeleteCarId,
} from '../selectors/carToolSelectors';

import {
  addCar, saveCar, deleteConfirmCar,
  createDeleteRequestCarAction,
  createDeleteCancelCarAction,
  createEditCarAction,
  createCancelCarAction,
  createSortCarsAction,
} from '../actions/carToolActions';


export const useCarToolReduxStore = () => {

  const cars = useSelector(selectSortedCars);
  const carsSort = useSelector(selectCarsSort);
  const editCarId = useSelector(selectEditCarId);
  const requestDeleteCarId = useSelector(selectRequestDeleteCarId);

  const dispatch = useDispatch();

  const actions = useMemo(() => bindActionCreators({
    addCar,
    saveCar,
    requestDeleteCar: createDeleteRequestCarAction,
    deleteCar: deleteConfirmCar,
    cancelDeleteCar: createDeleteCancelCarAction,
    editCar: createEditCarAction,
    cancelCar: createCancelCarAction,
    sortCars: createSortCarsAction,
  }, dispatch), [dispatch]);

  return { ...actions, cars, carsSort, editCarId, requestDeleteCarId };
};