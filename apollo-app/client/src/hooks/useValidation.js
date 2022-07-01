import { useState, useCallback } from 'react';



export const useValidation = () => {

  const [ errors, setErrors ] = useState([]);

  const addError = useCallback((error) => {
    setErrors(latestErrors => {
      return [ ...latestErrors, error ]
    });
  }, []);

  const clearErrors = useCallback(() => setErrors([]), []);

  return [
    errors,
    addError,
    clearErrors
  ];

};