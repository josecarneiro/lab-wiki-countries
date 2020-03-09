import React, { Component } from 'react'
import countries from "./../../src/countries.json"
import { Link, Route } from "react-router-dom"



class CountryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: null
    };
  }

  componentDidMount() {
    this.fetchData();
    console.log(countries);
  }

  // componentDidUpdate(previousProps, previousState) {
  //   const countryChanged = previousProps.name.common !== this.props.name.common;
  //   if (countryChanged) {
  //     this.fetchData();   /// resolveu a mudança de um perfil para o outro.
  //   }
  // }

  fetchData() {
    const name = this.props.name;
    const country = countries.find(item => item.name.common === name);
    this.setState({
      country
    });
  }

  render() {
    const country = this.state.country;
    console.log(country)

    return (
      (country && (
        <div>
          <Link to={`/${country.cca3}`}>{country.name.common} <img src={`https://www.countryflags.io/${country.cca2}/flat/64.png`} /></Link >
          <Route path={`/:${country.cca3}`} component={CountryPage} exact />
        </div>
      )) ||
      ""
    )
  }
}

export default CountryPage;