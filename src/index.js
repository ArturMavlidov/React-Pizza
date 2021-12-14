import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes } from 'react-router-dom'

import './scss/app.scss';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
