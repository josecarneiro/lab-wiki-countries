import React, { Component } from 'react';
import listOfCountries from './../../countries.json';
class CountrieStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countrie: null
    };
  }
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(previousProps, previousState) {
    
    const countrieChanged = previousProps.match.params.name !== this.props.match.params.name;
    if (countrieChanged) {
      this.fetchData();
    }
  }

  fetchData() {
    const cca2 = this.props.match.params.name;
    const countrie = listOfCountries.find(item => item.cca2 === cca2);
    this.setState({
      countrie
    });
  }

  render() {
    const countrie = this.state.countrie;
console.log(countrie)
    return (
      (countrie && (
        <div>
          <h1>{countrie.name.official}</h1>
          <table>
            <thead></thead>
            <tbody>
              <tr>
                <td>Capital</td>
                <td>{countrie.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                {countrie.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                  {countrie.borders.map(item =>(
                    <li>
                      <a href={`/${item.cca2}`}> {item.name.official} </a>
                    </li>

                  ))}
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
      'error'
    );
  }
}

export default CountrieStats;
