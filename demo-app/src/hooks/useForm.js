import { useState } from 'react';

export const useForm = (initialForm) => {

  const [ form, setForm ] = useState(initialForm);

  const change = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.type === 'number'
        ? target.valueAsNumber
        : target.value,
    });
  };

  const resetForm = () => setForm(initialForm);

  // using a JavaScript array as a tuple structure
  return [ form, change, resetForm ];

};