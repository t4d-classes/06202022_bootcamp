import { useContext, createContext } from 'react';

import { useCarToolStore } from '../hooks/useCarToolStore';



const carToolStoreContext = createContext();

export const CarToolStoreProvider = ({ children }) => {

  return (
    <carToolStoreContext.Provider value={useCarToolStore()}>
      {children}
    </carToolStoreContext.Provider>
  );

}

export const useCarToolStoreContext = () => {
  // return the data off of the context
  return useContext(carToolStoreContext);
};