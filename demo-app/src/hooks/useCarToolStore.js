import { useState } from 'react';
import { useSortedList } from './useSortedList';

const carList = [
  { id: 1, make: 'Bugati', model: 'Chiron Supersport', year: 2022, car: 'blue', price: 3825000 },
  { id: 2, make: 'Ford', model: 'Fusion Hybrid', year: 2020, car: 'red', price: 45000 },
];


export const useCarToolStore = () => {

  const [
    cars, sortCol, sortDir,
    appendCar, replaceCar, removeCar, sortCars,
  ] = useSortedList(carList);

  const [ editCarId, setEditCarId ] = useState(-1);

  const [ requestDeleteCarId, setRequestDeleteCarId ] = useState(0);

  const editCar = carId => {
    setEditCarId(carId);
  };

  const cancelCar = () => {
    setEditCarId(-1);
  };

  const addCar = (newCar) => {
    appendCar(newCar);
    setEditCarId(-1);
  };

  const saveCar = car => {
    replaceCar(car);
    setEditCarId(-1);
  };

  const requestDeleteCar = carId => {
    setRequestDeleteCarId(carId);
    setEditCarId(-1);
  };


  const deleteCar = () => {
    removeCar(requestDeleteCarId);
    setRequestDeleteCarId(0);
    setEditCarId(-1);
  };

  const cancelDeleteCar = () => {
    setRequestDeleteCarId(0);
  };

  return {
    cars, editCarId, sortCol, sortDir, requestDeleteCarId,
    editCar, cancelCar, addCar, saveCar, deleteCar, sortCars,
    requestDeleteCar, cancelDeleteCar,
  };

};