import React, { Component } from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import CountryDetail from './components/CountryDetail';
import ListOfCountries from './components/ListOfCountries';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container mt-5">
          <div className="row">
            <ListOfCountries />
            <Switch>
              <Route path="/:cca3" component={CountryDetail} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
