import { CarEditRow } from './CarEditRow';
import { CarViewRow } from './CarViewRow';


const ColSortHeader = ({
  headerText, fieldName, sortCol, sortDir, onSortCars: sortCars
}) => {
  return (
    <th>
      <button type="button" onClick={() => sortCars(fieldName)}>
        {headerText} {sortCol === fieldName && <span>({sortDir})</span>}
      </button>
    </th>    
  );
};

export const CarTable = ({
  cars,
  editCarId,
  sortCol,
  sortDir,
  onSortCars,
  onEditCar: editCar,
  onDeleteCar: deleteCar,
  onSaveCar: saveCar,
  onCancelCar: cancelCar,
}) => {

  const colSortHeaders = [
    { headerText: "Id", fieldName: "id" },
    { headerText: "Make", fieldName: "make" },
    { headerText: "Model", fieldName: "model" },
    { headerText: "Year", fieldName: "year" },
    { headerText: "Color", fieldName: "color" },
    { headerText: "Price", fieldName: "price" },
  ];

  return (
    <table>
      <thead>
        <tr>
          {colSortHeaders.map(csh =>
            <ColSortHeader key={csh.fieldName} {...csh}
              {...{sortCol, sortDir, onSortCars}} />)}            
          <th>Actions</th>
        </tr>
      </thead>        
      <tbody>
        {cars.map(car =>
          car.id === editCarId
            ? <CarEditRow key={car.id} car={car}
                onSaveCar={saveCar} onCancelCar={cancelCar} />
            : <CarViewRow key={car.id} car={car}
                onEditCar={editCar} onDeleteCar={deleteCar} />)}
      </tbody>
    </table>    
  );

};