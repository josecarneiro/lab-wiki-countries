import React from 'react';
import './App.css';
import CountryDetail from './view/CountryDetail';
import countries from './countries.json';
import { Switch, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary pl-5 pr-5 mb-4">
        <a className="navbar-brand" href="/">
          WikiCountries
        </a>
      </nav>
      <div className="padding">
        <div className="row d-flex">
          <div className="container col-8">
            <main>
              {countries.map(country => {
                return (
                  <section key={country.cca3} className="card card-body mb-3 mt-3">
                    <Link to={`/${country.cca3}`}>
                      <img src={`https://www.countryflags.io/${country.cca2}/flat/64.png`} /> {country.name.common}
                    </Link>
                  </section>
                );
              })}
            </main>
          </div>
          <Switch>
            <Route path="/:country" component={CountryDetail} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default App;