import React, { Component } from 'react';

import Countries from '../countries.json';
import Borders from '../components/Borders';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import CountriesList from '../components/countriesList';

export default class infoCountry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: null
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(previousProps, previousState) {
    const singleCountry = previousProps.match.params.name !== this.props.match.params.name;
    if (singleCountry) {
      this.fetchData();
    }
  }

  fetchData() {
    const routeCountry = this.props.match.params.name;
    const countryFound = Countries.find(country => country.cca3 === routeCountry);

    this.setState({
      country: countryFound
    });
  }

  render() {
    const country = this.state.country;


    return (
      <div className="row">
        <div className="col-5">
          {/* <!-- List group: https://getbootstrap.com/docs/4.0/components/list-group/#links-and-buttons --> */}
          <div className="list-group">
            <Link to="/" className="list-group-item list-group-item-action active">
              <h1>Countries</h1>
            </Link>
            <CountriesList countries={Countries} />
          </div>
        </div>

        <div className="col-7">
          {(country && (
            <div>
              <h1>{country.name.common}</h1>
              <p>
                <strong>Capital:</strong>
                {country.capital[0]}
              </p>
              <p>
                <strong>Area</strong>
                {country.area} km²
              </p>
              {country.borders.length>0 && (
                <p>
                  <strong>Borders:</strong>
                  <Borders borders={country.borders} />
                </p>
              ) || ''}
            </div>
          )) ||
            ''}
        </div>
      </div> //Final Row
    );
  }
}

// import React from 'react'

// const infoCountry = (props) => {

//   return (
//     <div>
//       <p>Second page</p>
//     </div>
//   )
// }

// export default infoCountry;
