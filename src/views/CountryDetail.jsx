import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import data from './../countries.json';

class CountryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: null,
      eachBorder: []
    };
  }
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(previousProps, PreviousState) {
    const countryChanged = previousProps.match.params.cca3 !== this.props.match.params.cca3;
    if (countryChanged) {
      this.fetchData();
    }
  }

  fetchData() {
    const name = this.props.match.params.cca3;
    const country = data.find(item => item.cca3 === name);
    const borders = country.borders;
    const eachBorder = data.filter(country => borders.includes(country.cca3));
    console.log(eachBorder);

    this.setState({
      country,
      eachBorder
    });
  }

  render() {
    return (
      (this.state.country && (
        <div class="col-7">
          <table class="table">
            <thead></thead>
            <tbody>
              <h1>Country</h1>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{this.state.country.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>{this.state.country.area}</td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {this.state.eachBorder.map(border => (
                      <li>
                        <Link to={border.cca3}>{border.name.common}</Link>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )) ||
      ''
    );
  }
}

export default CountryDetail;
