import { useState } from 'react';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

import { useSortedList } from '../hooks/useList';


export const CarTool = ({ cars: initialCars }) => {

  const [
    cars, sortCol, sortDir,
    appendCar, replaceCar, removeCar, sortCars,
  ] = useSortedList([...initialCars]);

  const [ editCarId, setEditCarId ] = useState(-1);

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

  const deleteCar = carId => {
    removeCar(carId);
    setEditCarId(-1);
  };

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars}
        sortCol={sortCol} sortDir={sortDir} editCarId={editCarId}
        onSortCars={sortCars} onEditCar={editCar} onDeleteCar={deleteCar}
        onSaveCar={saveCar} onCancelCar={cancelCar} />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    </>
  );


};

