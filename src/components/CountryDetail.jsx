import React, { Component } from 'react';
import Countries from './../countries.json';
import { Link } from 'react-router-dom';

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
    const didChange = previousProps.match.params.cca3 !== this.props.match.params.cca3;
    if (didChange) {
      this.fetchData();
    }
  }

  fetchData() {
    const countryParams = this.props.match.params.cca3;
    const country = Countries.find(eachCountry => eachCountry.cca3 === countryParams);
    this.setState({ country });
  }

  render() {
    return (
      <div className="col-7">
        {this.state.country && (
          <table className="table">
            <thead>
              <tr>
                <th>
                  <h1>{this.state.country.name.common}</h1>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{this.state.country.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {this.state.country.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {this.state.country.borders.map(border => {
                      const eachName = Countries.find(country => country.cca3 === border);
                      return (
                        <li key={border}>
                          <Link to={border}>{eachName.name.common}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

export default CountryDetail;
