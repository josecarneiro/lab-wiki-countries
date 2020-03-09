import React, { Component } from 'react';

import Countries from '../../countries.json';
import { Link } from 'react-router-dom';



export default class Borders extends Component {
 
  render() {
    let arrayCountry = [];

    const borderCountry = this.props.borders;

    for(let i=0;i<borderCountry.length;i++){
      arrayCountry.push(Countries.filter(country => country.cca3 === borderCountry[i]));
    }
    
   
    return (
      <ul>
        {arrayCountry.map( country => 
          <li>
            <Link to={country[0].cca3}>
              {country[0].name.common}
            </Link>
          </li>

       )}
      </ul>
    )
  }
}
