import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';
import { CarToolStoreProvider } from './contexts/carToolStoreContext';
import { ColorToolStoreProvider } from './contexts/colorToolStoreContext';

export const App = () => {

  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="color-tool" element={<ColorToolStoreProvider>
            <ColorTool />
          </ColorToolStoreProvider>} />
          <Route path="car-tool" element={<CarToolStoreProvider>
            <CarTool />
          </CarToolStoreProvider>} />
        </Route>
      </Routes>
    </Router>
  );

};