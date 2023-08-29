import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './copmponents/App/App';

import './fonts/Roboto-Regular.ttf';
import './style/index.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

