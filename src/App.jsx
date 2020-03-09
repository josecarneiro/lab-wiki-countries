import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CountryDetail from './views/CountryDetail';

class App extends Component {
  render() {
    return (
      <div className="App">
      <a href="/" className="list-group-item list-group-item-action active ">WikiCountries</a> 
        <BrowserRouter>
          <Switch>
            <Route path="/:cca3" component={CountryDetail} exact />
            <Route path="/" component={CountryDetail} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
