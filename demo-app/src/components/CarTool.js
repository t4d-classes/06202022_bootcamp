import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

import { useCarToolStore } from '../hooks/useCarToolStore';


export const CarTool = () => {

  const {
    cars, editCarId, sortCol, sortDir, requestDeleteCarId,
    editCar, cancelCar, addCar, saveCar, deleteCar, sortCars,
    requestDeleteCar, cancelDeleteCar,
  } = useCarToolStore();

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars}
        sortCol={sortCol} sortDir={sortDir} editCarId={editCarId}
        onSortCars={sortCars} onEditCar={editCar} onDeleteCar={requestDeleteCar}
        onSaveCar={saveCar} onCancelCar={cancelCar} />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />

      {(requestDeleteCarId > 0) && <div class="modal">
        <form>
          <p>Are you sure you want to delete the car?</p>
          <button type="button" onClick={deleteCar}>Yes</button>
          <button type="button" onClick={cancelDeleteCar}>No</button>
        </form>
      </div>}
    </>
  );


};

