import React, { Component } from 'react';
import data from './../countries.json';

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
      previousProps.match.params.countryCode !== this.props.match.params.countryCode;
    if (countryChanged) {
      this.fetchData();
    }
  }

  fetchData() {
    const countryCode = this.props.match.params.countryCode;
    const country = data.find(item => item.cca3 === countryCode);
    this.setState({
      country
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
            <div className="list-group">
              {data.map(item => {
                return (
                  <a
                    key={item.name.common}
                    className="list-group-item list-group-item-action"
                    href={item.cca3}
                  >
                    <span role="img" aria-label="flag">
                      {item.flag}
                    </span>{' '}
                    {item.name.common}
                  </a>
                );
              })}
            </div>
          </div>
          {this.state.country && (
            <div className="col-7">
              <h1>{this.state.country.name.common}</h1>
              <table className="table">
                <thead></thead>
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
                        {this.state.country.borders.map(item => {
                          return (
                            <li>
                              <a href={item}>
                                {data.find(country => country.cca3 === item).name.common}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default CountryDetail;
