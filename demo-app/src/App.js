import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { calcToolStore } from './stores/calcToolStore';
import { colorToolStore } from './stores/colorToolStore';

import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { ColorTool } from './components/color-tool/ColorTool';
import { CarTool } from './components/CarTool';
import { CalcTool } from './components/CalcTool';
import { CarToolStoreProvider } from './contexts/carToolStoreContext';

export const App = () => {

  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="color-tool" element={<Provider store={calcToolStore}>
            <ColorTool />
          </Provider>} />
          <Route path="car-tool" element={<CarToolStoreProvider>
            <CarTool />
          </CarToolStoreProvider>} />
          <Route path="calc-tool" element={<Provider store={calcToolStore}>
            <CalcTool />
          </Provider>} />          
        </Route>
      </Routes>
    </Router>
  );

};