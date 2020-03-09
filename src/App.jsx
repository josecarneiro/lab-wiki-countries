import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import CountryDetail from './views/CountryDetail';
import allCountries from './countries.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-dark bg-primary mb-3">
          <div class="container">
            <a class="navbar-brand" href="/">
              WikiCountries
            </a>
          </div>
        </nav>
        <BrowserRouter>
          <div class="container">
            <div class="row">
              <div class="col-5">
                <div class="list-group">
                  {allCountries.map(country => (
                    <Link class="list-group-item list-group-item-action" to={country.cca3}>
                      {' '}
                      <img
                        class="flag-img"
                        src={`https://www.countryflags.io/${country.cca2}/flat/64.png`}
                        alt="Flag"
                      />
                      {country.name.official}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Switch>
            <Route path="/:name" exact component={CountryDetail} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
