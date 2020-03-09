import React, { Component } from 'react';
import Data from '../countries.json';

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

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const theCountry = this.props.match.params.country;
    Data.map(country => {
      if (country.cca3 === theCountry) {
        this.setState({
          name: country.name.common,
          capital: country.capital,
          area: country.area,
          borders: country.borders
        });
      }
    });
  }

  convertToCountry(convert) {
    const country = Data.find(country => country.cca3 === convert);
    if (!country) return;
    return country.name.common;
  }

  componentDidUpdate(previousProp, previousState) {
    const previousParam = previousProp.match.params.country;
    const presentParam = this.props.match.params.country;
    if (presentParam !== previousParam) {
      this.fetchData();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

export default CountryDetail;
