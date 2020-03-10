import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import CountryDetail from './Components/CountryDetail/CountryDetail';
import Countries from './countries.json';

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">
            WikiCountries
          </a>
        </div>
      </nav>
      <div className="row">
        <div className="col-5" style={{ maxheight: '90vh', overflow: 'scroll' }}>
          <div className="list-group">
            {Countries.map(country => {
              return (
                <Link className="list-group-item list-group-item-action" to={country.cca3}>
                  {country.flag}
                  {country.name.common}
                </Link>
              );
            })}
          </div>
        </div>
        <Switch>
          <Route path="/:country" component={CountryDetail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
