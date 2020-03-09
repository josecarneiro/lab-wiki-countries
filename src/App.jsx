import React, { Component } from 'react';
import './App.css';
import { Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CountryList from './components/CountryList.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import countries from './countries.json';

class App extends Component {
  render() {
    countries.map(country => console.log(country));
    return (
      <div id="root">
        <div>
          <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
              <a className="navbar-brand" href="/">
                WikiCountries
              </a>
            </div>
          </nav>
          <div>
            <CountryList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
