import React, { Component } from 'react';
import countries from './../countries.json';
import { Link } from 'react-router-dom';

export default class CountryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singleCountry: null
    };
  }
  componentDidMount() {
    this.fetchData();
  }
  componentDidUpdate(previousProps, previousState) {
    const singleCountry = previousProps.match.params.cca3 !== this.props.match.params.cca3;
    if (singleCountry) {
      this.fetchData();
    }
  }

  fetchData() {
    const cca3 = this.props.match.params.cca3;
    //in the future we will comunicate with the server in the fase
    const singleCountry = countries.find(item => item.cca3 === cca3);
    this.setState({
      singleCountry
    });
  }
  render() {
    // console.log(this.state.singleCountry);
    const singleCountry = this.state.singleCountry;

    return (
      <div className="row">
        <div className="col-5 modal-body">
          <div className="listGroup">
            {countries.map((item, i) => (
              <Link key={i} className="list-group-item list-group-item-action" to={item.cca3}>
                {item.name.common}
              </Link>
            ))}
          </div>
        </div>
        {(singleCountry && (
          <div className="col-7">
            <h1>Common Name {singleCountry.name.common}</h1>
            <p>Official Name: {singleCountry.name.official}</p>
            {singleCountry.name.independent ? <p>Independt: Yes</p> : <p>Independt: Yes </p>}
            <p>Capital: {singleCountry.capital}</p>
            <p>Area: {singleCountry.area}km2</p>
            <p>{singleCountry.flag}</p>
            <h6>Spoken Languages:</h6>
            {Object.values(singleCountry.languages).map(x => (
              <p key={Math.floor(Math.random() * 1000000)}>{x}</p>
            ))}
            <h6>Borders:</h6>
            <ul>
              {singleCountry.borders.map((x, i) => (
                <li key={i}>
                  <Link to={x}>{countries.find(item => item.cca3 === x).name.common}</Link>
                </li>
              ))}
            </ul>

            <h5>Translation of Country Common name to:</h5>
            <ul>
              {Object.keys(singleCountry.translations).map((keyCountry, i) =>
                Object.values(singleCountry.translations).map(
                  (valueCountry, h) =>
                    i === h && (
                      <li key={i}>
                        <h6>{keyCountry}</h6>
                        <p>Offical name: {valueCountry.official}</p>
                        <p>Common name: {valueCountry.common}</p>
                      </li>
                    )
                )
              )}
            </ul>
          </div>
        )) ||
          ''}
      </div>
    );
  }
}
