// // src/index.js
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// // import App from './pages/app';
// // import Approutes from"../src/routes/Approutes";
// import Rout from '../src/routes/Rout';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(<App />);
// root.render(<Rout />);
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Rout from './routes/Rout';  // your routes component

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Rout />
  </BrowserRouter>
);