// ES2015 Module Imports

// default import
// import ReactDOM from 'react-dom';

// named import
import { createRoot } from 'react-dom/client';

import { App } from './App';

const root = createRoot(document.querySelector("#root"));

// <App /> - custom component so it starts with uppercase 'A'
root.render(<App />);