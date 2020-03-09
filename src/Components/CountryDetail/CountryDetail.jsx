import React, { Component } from 'react';
import CountryData from '../../countries.json';
import { Link } from 'react-router-dom';

class CountryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      capital: '',
      area: '',
      borders: []
    };
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {
    const contr = this.props.match.params.country;
    CountryData.map(country => {
      if (country.cca3 === contr) {
        this.setState({
          name: country.name.commopn,
          capital: country.capital,
          area: country.area,
          borders: country.borders
        });
      }
    });
  }

  componentDidMount() {
    this.fetchData();
  }
  componentDidUpdate(previousProps, previousState) {
    const countryChanged = previousProps.match.params.country !== this.props.match.params.country;
    if (countryChanged) {
      this.fetchData();
    }
  }
  convertToCountry(abrv) {
    const country = CountryData.find(country => country.cca3 === abrv);
    if (!country) return;
    return country.name.common;
  }

  render() {
    console.log('borders', this.state.borders);
    return (
      <div class="col-7">
        <h1>{this.state.capital}</h1>
        <table class="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{this.state.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {this.state.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {this.state.borders.map(country => {
                    return (
                      <li key={country}>
                        <Link to={`/${country}`}>{this.convertToCountry(country)}</Link>
                      </li>
                    );
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CountryDetail;
