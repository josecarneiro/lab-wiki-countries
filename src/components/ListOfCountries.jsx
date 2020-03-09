import React from 'react';
import Countries from './../countries.json';
import { Link } from 'react-router-dom';

function ListOfCountries() {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <ul className="listOfCountries list-group">
        <h3>List of Countries</h3>
        {Countries.map(country => {
          return (
            <li className="list-group-item list-group-item-action" key={country.name.common}>
              <Link to={country.cca3}>
                <span>{country.flag}</span>
                {country.name.common}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ListOfCountries;
