import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { ColorTool } from './components/ColorTool';


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
          <Route path="color-tool" element={<ColorTool />} />
        </Route>
      </Routes>
    </Router>
  );

};