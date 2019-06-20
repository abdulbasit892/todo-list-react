import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';
import "./index.css";

import fire from "./config/firebase";
fire();
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
