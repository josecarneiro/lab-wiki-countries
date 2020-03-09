import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import CountryDetail from './Components/CountryDetail/CountryDetail';
import Countries from './countries.json';

function App() {
  return (
    <BrowserRouter>
      <nav class="navbar navbar-dark bg-primary mb-3">
        <div class="container">
          <a class="navbar-brand" href="/">
            WikiCountries
          </a>
        </div>
      </nav>
      <div class="row">
        <div class="col-5" style={{ maxheight: '90vh', overflow: 'scroll' }}>
          <div class="list-group">
            {Countries.map(country => {
              return (
                <Link class="list-group-item list-group-item-action" to={country.cca3}>
                  {country.flag} {country.name.common}
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
