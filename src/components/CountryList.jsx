import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import countries from './../countries.json';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import CountryDetail from './CountryDetail';

const CountryList = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5" style={{ maxheight: '10vh', overflow: 'scroll' }}>
          {/* <BrowserRouter>
            <Link to="/">Home</Link>
            <Link to="/second/jose">José's Page</Link>
            <Link to="/second/santi">Santi's Page</Link>
          <Switch>
            <Route path="/second/:name" component={SecondPage} exact />
            <Route path="/" component={FirstPage} exact />
          </Switch>
        </BrowserRouter> */}

          <div className="list-group">
            {countries.map(country => {
              return (
                <BrowserRouter>
                  <Link
                    to={`/country/:${country.name.common.toLowerCase()}`}
                    className="list-group-item list-group-item-action"
                  >
                    <img src={`https://www.countryflags.io/${country.cca2}/flat/16.png`} alt="" />
                    {country.name.common}
                  </Link>
                  <Switch>
                    <Route path="/second/:country" component={CountryDetail} />
                  </Switch>
                </BrowserRouter>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryList;
