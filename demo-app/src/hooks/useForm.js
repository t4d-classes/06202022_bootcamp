import { useState, useCallback } from 'react';

export const useForm = (initialForm) => {

  const [ form, setForm ] = useState(initialForm);

  const change = useCallback(({ target }) => {
    setForm({
      ...form,
      [target.name]: target.type === 'number'
        ? target.valueAsNumber
        : target.value,
    });
  }, [form]);

  const resetForm = useCallback(() => setForm(initialForm), [initialForm]);

  // using a JavaScript array as a tuple structure
  return [ form, change, resetForm ];

};