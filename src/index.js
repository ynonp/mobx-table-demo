import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Data from './mobx/data';
import './mobx/iss_data_producer';
import './mobx/random_data_producer';

window.data = Data;
window.data.setHeaders(['lat', 'long']);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

