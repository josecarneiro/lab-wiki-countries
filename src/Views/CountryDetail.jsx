import React, { Component } from 'react';
import Data from '../countries.json';
import { Link } from 'react-router-dom';

class CountryDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      capital: '',
      area: '',
      borders: []
    };
    // this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {
    const contr = this.props.match.params.country;
    console.log(contr);
    Data.map(country => {
      if (country.cca3 === contr) {
        this.setState({
          name: country.name.common,
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

  convertToCountry(abriviation) {
    const country = Data.find(country => country.cca3 === abriviation);
    if (!country) return;
    return country.name.common;
  }

  componentDidUpdate(prevProp, prevState) {
    const prevParam = prevProp.match.params.country;
    const actParam = this.props.match.params.country;
    if (actParam !== prevParam) {
      this.fetchData();
    }
  }

  render() {
    return (
      <div className="col-4">
        <h1>{this.state.name}</h1>
        <hr></hr>
        <div>
          <h4 className="pb-3">Capital</h4>
          <p>{this.state.capital}</p>
        </div>
        <hr></hr>
        <div>
          <h4 className="pb-3">Area</h4>
          <p>{this.state.area}</p>
        </div>
        <div>
          <hr></hr>
          <h4 className="pb-3">Borders</h4>
          <ul>
            {this.state.borders.map(country => {
              return (
                <li key={country}>
                  <Link to={`/${country}`}>{this.convertToCountry(country)}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default CountryDetails;
