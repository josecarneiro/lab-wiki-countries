import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
    const countryChanged = previousProps.match.params.cca3 !== this.props.match.params.cca3;
    if (countryChanged) {
      this.fetchData();
    }
  }

  fetchData() {
    const selected = this.props.match.params.cca3;
    const country = countries.find(item => item.cca3 === selected);
    this.setState({
      country
    });
  }
  render() {
    const country = this.state.country;
    return (
      country && (
        <div className="col-7">
          <h1>{country.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{country.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {country.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ListGroup variant="flush">
                    {country.borders.map(item => (
                      <Link to={`/${item}`}>
                        <ListGroup.Item>{item}</ListGroup.Item>
                      </Link>
                    ))}
                  </ListGroup>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    );
  }
}

export default CountryDetail;
