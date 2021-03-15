import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './calculator.css';
import * as serviceWorker from './serviceWorker';

import CalcApp  from './calculator.jsx';


ReactDOM.render(
  <React.StrictMode>
    <CalcApp />
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
