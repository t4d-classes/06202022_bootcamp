import { useState } from 'react';


export const CarEditRow = ({
  car,
  onSaveCar: saveCar,
  onCancelCar: cancelCar
}) => {

  const [ carForm, setCarForm ] = useState({
    make: car.make,
    model: car.model,
    year: car.year,
    color: car.color,
    price: car.price,
  });

  const change = ({ target }) => {
    setCarForm({
      ...carForm,
      [target.name]: target.type === 'number'
        ? target.valueAsNumber // returns a number
        : target.value,
    });
  };


  return (
    <tr>
        <td>{car.id}</td>
        <td><input type="text" name="make"
          value={carForm.make} onChange={change} /></td>
        <td><input type="text" name="model"
          value={carForm.model} onChange={change} /></td>
        <td><input type="number" name="year"
          value={carForm.year} onChange={change} /></td>
        <td><input type="text" name="color"
          value={carForm.color} onChange={change} /></td>
        <td><input type="number" name="price"
          value={carForm.price} onChange={change} /></td>
        <td>
          <button type="button"
            onClick={saveCar}>Save</button>
          <button type="button"
            onClick={cancelCar}>Cancel</button>
        </td>
    </tr>    
  )

};