import { useState } from 'react';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

const SORT_DIR_ASC = 'asc';
const SORT_DIR_DESC = 'desc';


const sortTheCars = (cars, sortCol, sortDir) => {

  return [...cars].sort((a,b) => {
    if (a[sortCol] < b[sortCol]) {
      return sortDir === SORT_DIR_ASC ? -1 : 1
    } else if (a[sortCol] > b[sortCol]) {
      return sortDir === SORT_DIR_ASC ? 1 : -1
    } else {
      return 0;
    }
  });
};

export const CarTool = ({ cars: initialCars }) => {

  const [ cars, setCars ] = useState([...initialCars]);

  const [ editCarId, setEditCarId ] = useState(-1);

  const [ sortCol, setSortCol ] = useState('id');
  const [ sortDir, setSortDir ] = useState(SORT_DIR_ASC);

  const editCar = carId => {
    setEditCarId(carId);
  };

  const cancelCar = () => {
    setEditCarId(-1);
  };

  const addCar = (newCar) => {
    setCars([
      ...cars,
      {
        ...newCar,
        id: Math.max(...cars.map(c => c.id), 0) + 1,
      },
    ]);
    setEditCarId(-1);
  };

  const saveCar = car => {
    const newCars = [...cars];
    const carIndex = newCars.findIndex(c => c.id === car.id);
    newCars[carIndex] = car;
    setCars(newCars);
    setEditCarId(-1);
  };

  const deleteCar = carId => {
    setCars(cars.filter(c => c.id !== carId));
    setEditCarId(-1);
  };

  const sortCars = (colName) => {
    if (colName === sortCol) {
      setSortDir(sortDir === SORT_DIR_ASC ? SORT_DIR_DESC : SORT_DIR_ASC);
    } else {
      setSortCol(colName);
      setSortDir(SORT_DIR_ASC);
    }
  };

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={sortTheCars(cars, sortCol, sortDir)}
        sortCol={sortCol} sortDir={sortDir} editCarId={editCarId}
        onSortCars={sortCars} onEditCar={editCar} onDeleteCar={deleteCar}
        onSaveCar={saveCar} onCancelCar={cancelCar} />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    </>
  );


};

