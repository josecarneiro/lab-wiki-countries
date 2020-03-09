import React, { Component } from 'react';
import { BrowserRouter, Switch, Route , Link} from 'react-router-dom';
import CountryDetails from './CountryDetails'

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Countries from './countries.json'

class App extends Component {
  render() {
    return (
      <div className="App">
         <BrowserRouter>
            <nav className="navbar navbar-dark bg-primary mb-3">
              <div className="container">
               <a className="navbar-brand" href="/">WikiCountries</a>
              </div>
            </nav>

      <div className="container">
        <div className="row">
          <div className="col-5" style={{ maxHeight: 590, overflowY: 'scroll' }}>
            <div className="list-group">
               {Countries.map(item => <Link key={item.cca3} className="list-group-item list-group-item-action" to={item.cca3}>{item.flag} {item.name.common}</Link>)}
            </div>
          </div>
          <Route path="/:cca3" component={CountryDetails}/>         
        </div>
      </div>
         </BrowserRouter>
      </div>
    );
  }
}

export default App;
