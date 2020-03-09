import React, { Component } from 'react';

import countries from '../../countries.json';
import countrieSingle from '../countrieSingle';

import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import infoCountry from '../../view/infoCountry';


export default class countriesList extends Component {
  
  render() {
    const countriesArray = this.props.countries;

    return (
          countriesArray.map(country => {
            return (
            <Link key={country.name.common} to={country.cca3}>
              <p>{country.name.common}</p>
            </Link>

            
            
            );
          }) 
    )
  }
}
