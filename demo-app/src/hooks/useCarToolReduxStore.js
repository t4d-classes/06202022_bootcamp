import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo, useEffect } from 'react';

import {
  selectSortedCars,
  selectCarsSort,
  selectEditCarId,
  selectRequestDeleteCarId,
} from '../selectors/carToolSelectors';

import {
  addCar, saveCar, deleteConfirmCar,
  refreshCars,
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

  const boundActions = useMemo(() => bindActionCreators({
    refreshCars,
    addCar,
    saveCar,
    requestDeleteCar: createDeleteRequestCarAction,
    deleteCar: deleteConfirmCar,
    cancelDeleteCar: createDeleteCancelCarAction,
    editCar: createEditCarAction,
    cancelCar: createCancelCarAction,
    sortCars: createSortCarsAction,
  }, dispatch), [dispatch]);

  useEffect(() => {
    boundActions.refreshCars();
  }, [boundActions]);  

  return { ...boundActions, cars, carsSort, editCarId, requestDeleteCarId };
};