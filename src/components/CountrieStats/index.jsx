import React, { Component } from 'react';
import listOfCountries from './../../countries.json';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
class CountrieStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countrie: null
    };
  }
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(previousProps, previousState) {
    const countrieChanged = previousProps.match.params.name !== this.props.match.params.name;
    if (countrieChanged) {
      this.fetchData();
    }
  }

  fetchData() {
    const cca3 = this.props.match.params.name;
    const countrie = listOfCountries.find(item => item.cca3 === cca3);
    this.setState({
      countrie
    });
  }
  convertToCountry(abriviation) {
    const countrie = listOfCountries.find(country => country.cca3 === abriviation);
    if (!countrie) return;
    return countrie.name.common;
  }

  render() {
    const countrie = this.state.countrie;
    console.log(countrie);
    return (
      (countrie && (
        <div>
          <h1>{countrie.name.official}</h1>
          <table>
            <thead></thead>
            <tbody>
              <tr>
                <td>Capital</td>
                <td>{countrie.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {countrie.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {countrie.borders.map(item => (
                      <li>
                        <Link to={`/${item}`}> {this.convertToCountry(countrie)} </Link>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )) ||
      'error'
    );
  }
}

export default CountrieStats;
