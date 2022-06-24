import { useContext, createContext } from 'react';

import { useColorToolStore } from '../hooks/useColorToolStore';



const colorToolStoreContext = createContext();

export const ColorToolStoreProvider = ({ children }) => {

  return (
    <colorToolStoreContext.Provider value={useColorToolStore()}>
      {children}
    </colorToolStoreContext.Provider>
  );

}

export const useColorToolStoreContext = () => {
  // return the data off of the context
  return useContext(colorToolStoreContext);
};