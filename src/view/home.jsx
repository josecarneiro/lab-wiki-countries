import React, { Component } from 'react';

import CountriesList from '../components/countriesList';

import Countries from '../countries.json';

export default class home extends Component {
  render() {
    return (
      <div>
        <h1>Countries</h1>
        <CountriesList countries={Countries} />
      </div>
    );
  }
}
