import { useState, useCallback } from 'react';

export const ColorForm = ({buttonText, onSubmitColor}) => {

  const [ colorForm, setColorForm ] = useState({ name: '', hexcode: '' });

  const change = useCallback(({ target }) => {
    setColorForm({
      ...colorForm,
      [target.name]: target.type === 'number'
        ? target.valueAsNumber // returns a number
        : target.value,
    });
  }, [colorForm]);

  const submitColor = useCallback(() => {
    onSubmitColor({ ...colorForm });
    setColorForm({ name: '', hexcode: '' });
  }, [onSubmitColor, colorForm]);

  return (
    <form>
      <label>
        Color Name:
        <input type="text" name="name"
          value={colorForm.name} onChange={change} />
      </label>
      <label>
        Color Hexcode:
        <input type="text" name="hexcode"
          value={colorForm.hexcode} onChange={change} />
      </label>

      <button type="button" onClick={submitColor}>{buttonText}</button>
    </form>
  )

};

ColorForm.defaultProps = {
  buttonText: 'Submit Color',
};

// export const ColorForm = () => {

//   // the object passed into `useState` is only used on the first render to initialize the state
//   //const colorFormState = useState({ name: '', hexcode: '' } /* initial color form state */);

//   // this is the actual state date, for example: colorForm.hexcode
//   //const colorForm = colorFormState[0];

//   // this is a function used to update the state, and trigger a re-render
//   //const setColorForm = colorFormState[1];

//   const [ colorForm, setColorForm ] = useState({ name: '', hexcode: '' });

//   const change = ({ target }) => {
    

//     // get data from the input field the user was typing into
//     // const inputElement = evt.target;
//     // const fieldType = inputElement.type;
//     // const fieldName = inputElement.name;

//     // newColorForm[fieldName /* name or hexcode */] = fieldType === 'number'
//     //   ? inputElement.valueAsNumber // returns a number
//     //   : inputElement.value; // returns a string

//     // copy the existing color form object
//       // name: colorForm.name,
//       // hexcode: colorForm.hexcode,

//     setColorForm({
//       ...colorForm,
//       [target.name]: target.type === 'number'
//         ? target.valueAsNumber // returns a number
//         : target.value,
//     });


//     // setColorForm(newColorForm); // update the state, and re-render

//   };

//   console.log(colorForm);

//   return (
//     <form>
//       <label>
//         Color Name:
//         <input type="text" name="name" value={colorForm.name} onChange={change} />
//       </label>
//       <label>
//         Color Hexcode:
//         <input type="text" name="hexcode" value={colorForm.hexcode} onChange={change} />
//       </label>
//     </form>
//   )

// };