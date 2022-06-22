import { useState } from 'react';


const initialCarForm = () => ({
  make: '', model: '', year: 1886, color: '', price: 0,
});

export const CarForm = ({buttonText, onSubmitCar}) => {

  const [ carForm, setCarForm ] = useState(initialCarForm());

  const change = ({ target }) => {
    setCarForm({
      ...carForm,
      [target.name]: target.type === 'number'
        ? target.valueAsNumber // returns a number
        : target.value,
    });
  };

  const submitCar = () => {
    onSubmitCar({ ...carForm });
    setCarForm(initialCarForm());
  };

  return (
    <form>
      <label>
        Make:
        <input type="text" name="make"
          value={carForm.make} onChange={change} />
      </label>
      <label>
        Model:
        <input type="text" name="model"
          value={carForm.model} onChange={change} />
      </label>
      <label>
        Year:
        <input type="number" name="year"
          value={carForm.year} onChange={change} />
      </label>
      <label>
        Color:
        <input type="text" name="color"
          value={carForm.color} onChange={change} />
      </label>
      <label>
        Price:
        <input type="number" name="price"
          value={carForm.price} onChange={change} />
      </label>

      <button type="button" onClick={submitCar}>{buttonText}</button>
    </form>
  )

};

CarForm.defaultProps = {
  buttonText: 'Submit Car',
};

