import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

const colorList = [
  { id: 1, name: 'red', hexcode: 'ff0000' },
  { id: 2, name: 'green', hexcode: '00ff00' },
  { id: 3, name: 'blue', hexcode: '0000ff' },
];


// named export
export const App = () => {

  // JSX
  // React.createElement('h1', null, 'App');
  // <h1 /> is an instrinsic element, and is rendered directly
  // to the DOM tree
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="color-tool" element={
            <ColorTool colors={colorList} headerText={"My Color Tool"} />} />
          <Route path="car-tool" element={<CarTool />} />
        </Route>
      </Routes>
    </Router>
  );

};