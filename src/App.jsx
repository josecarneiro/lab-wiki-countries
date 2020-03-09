import React, { Component } from 'react';
import './App.css';
import './style.scss';
import { Navbar, ListGroup } from 'react-bootstrap';
import countries from './countries.json';
import ListCountries from './components/ListCountries';
import CountryDetail from './views/CountrieDetail';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(){
    super();
    this.state = {
      countries: countries
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand>WikiCountries</Navbar.Brand>
        </Navbar>
        <div className="listDetail">
        <ListGroup className="listCountries">
          {
            this.state.countries.map((country, index) => 
              (<ListCountries {...country} key={index} id={index}/>))
          }
        </ListGroup>
        <Switch>
          <Route component={CountryDetail} path="/:cca3"></Route>
        </Switch>
        </div>
      </div>
    );
  }
}

export default App;
