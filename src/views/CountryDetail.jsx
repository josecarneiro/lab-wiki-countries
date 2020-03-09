import React, { Component } from 'react';
import countries from './../countries.json';
import { Link } from 'react-router-dom';
export default class CountryDetail extends Component {
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
    const country = previousProps.match.params.cca3 !== this.props.match.params.cca3;
    if (country) {
      this.fetchData();
    }
  }
  fetchData() {
    const cca3 = this.props.match.params.cca3;
    const country = countries.find(item => item.cca3 === cca3);
    this.setState({
      country
    });
  }
  render() {
    console.log(this.state.country);
    const country = this.state.country;
    return (
      <div className="row ">
        <div className="col-5  ">
          <div className="listGroup scrollingDiv">
            {countries.map((item, i) => (
              <Link key={i} className="list-group-item list-group-item-action" to={item.cca3}>
                {item.flag} {item.name.common}
              </Link>
            ))}
          </div>
        </div>
        {(country && (
          <div className="col-7">
            <h1>{country.name.common}</h1>

            <p>Capital: {country.capital}</p>
            <p>Area: {country.area}km2</p>

            <h6>Borders:</h6>
            <ul>
              {country.borders.map((country, i) => (
                <li key={i}>
                  <Link to={country}>
                    {countries.find(item => item.cca3 === country).name.common}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )) ||
          ''}
      </div>
    );
  }
}
