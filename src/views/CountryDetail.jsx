import React, { Component } from 'react';
// import { render } from '@testing-library/react';

import allCountries from './../countries.json';

const users = [{ name: allCountries }];

class CountryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(previousProps) {
    const userChanged = previousProps.match.params.name !== this.props.match.params.name;
    if (userChanged) {
      this.fetchData();
    }
  }

  fetchData() {
    const name = this.props.match.params.name;
    const user = users.find(item => item.name === name);
    this.setState({
      user
    });
  }

  render() {
    const user = this.state.user;

    return (
      (user && (
        <div class="col-7">
          <h1>{user.name.official}</h1>
          <table class="table">
            <thead></thead>
            <tbody>
              <tr>
                <td>Capital</td>
                <td>{user.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {user.area} km²
                  {/* <sup>2</sup> */}
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    <li>
                      <a href="/AND">Andorra</a>
                    </li>
                    <li>
                      <a href="/BEL">Belgium</a>
                    </li>
                    <li>
                      <a href="/DEU">Germany</a>
                    </li>
                    <li>
                      <a href="/ITA">Italy</a>
                    </li>
                    <li>
                      <a href="/LUX">Luxembourg</a>
                    </li>
                    <li>
                      <a href="/MCO">Monaco</a>
                    </li>
                    <li>
                      <a href="/ESP">Spain</a>
                    </li>
                    <li>
                      <a href="/CHE">Switzerland</a>
                    </li>
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
