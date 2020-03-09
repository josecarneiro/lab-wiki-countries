import React, { Component } from 'react';
import countries from './../countries.json';

class CountryDetail extends Component {
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
    const countryChanged =
      previousProps.match.params.name.common !== this.props.match.params.name.common;
    if (countryChanged) {
      this.fetchData();
    }
  }

  fetchData() {
    const paramCountry = this.props.match.params.name.common;
    const country = countries.find(item => item.name.common === paramCountry);
    this.setState({
      country
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.country.name}</h1>
      </div>
    );
  }
}

export default CountryDetail;
