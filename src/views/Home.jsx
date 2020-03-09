import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import countries from './../countries.json';

export default class Home extends Component {
  render() {
    return (
      <div>
        <ul>
          {countries.map((item, i) => (
            <li key={i}>
              <Link to={item.cca3}>{item.name.common}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
