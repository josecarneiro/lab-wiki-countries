import React, { Component } from 'react';

import CountriesList from '../components/countriesList';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';


import Countries from '../countries.json';

export default class home extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-5">
          {/* <!-- List group: https://getbootstrap.com/docs/4.0/components/list-group/#links-and-buttons --> */}
          <div className="list-group">
            <Link to="/" className="list-group-item list-group-item-action active"><h1>Countries</h1></Link>
            <CountriesList countries={Countries} />
          </div>
        </div>

        
      </div>
    );
  }
}
