import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

function Content() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
          <div className="list-group-item list-group-item-action">
            {countries.map(country => {
              return (
                <p>
                  <Link to={`/${country.cca3}`}>
                    <img src={`https://www.countryflags.io/${country.cca2}/flat/64.png`} />
                    {country.name.common}
                  </Link>
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
