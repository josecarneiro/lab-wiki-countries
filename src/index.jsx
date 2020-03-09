import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"

import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import CountryPage from './view/CountryDetail';


ReactDOM.render(
  <BrowserRouter>
    <App />
    <CountryPage />
  </BrowserRouter>,
  document.getElementById('root')
);