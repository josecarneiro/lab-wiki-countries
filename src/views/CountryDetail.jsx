import React, { Component } from 'react';
import countries from './../countries.json';

export default class CountryDetail extends Component {
  render() {
    const singleCountry = countries.find(item => item.cca3 === this.props.match.params.cca3);
    return (
      <div>
        <h1 key={Math.floor(Math.random() * 1000000000)}>
          Common Name {singleCountry.name.common}
        </h1>
        <p key={Math.floor(Math.random() * 1000000000)}>
          Official Name: {singleCountry.name.official}
        </p>
        {singleCountry.name.independent ? (
          <p key={Math.floor(Math.random() * 1000000000)}>Independt: Yes</p>
        ) : (
          <p key={Math.floor(Math.random() * 1000000000)}>Independt: Yes </p>
        )}
        <p key={Math.floor(Math.random() * 1000000000)}>Capital: {singleCountry.capital}</p>
        <p key={Math.floor(Math.random() * 1000000000)}>Area: {singleCountry.area}</p>
        <p key={Math.floor(Math.random() * 1000000000)}>{singleCountry.flag}</p>
      </div>
    );
  }
}
