import React, { Component } from 'react';
import './App.css';
import listOfCountries from './countries.json'
import 'bootstrap/dist/css/bootstrap.css';
import Countries from './components/countries'
import CountrieStats from './components/CountrieStats'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  constructor(){
    super()
  }
  render() {
    return (
      <div className="App">
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <div className="list-group">
             
       {listOfCountries.map(countrie => (
        <Countries
            countrie={countrie} Key = {countrie.name.official}
             
            />
       ))}
       </div>
      </div>
      <Switch>
            <Route path="/:name" component={CountrieStats} exact />
      </Switch>



      </div>
      </div>
      </div>
      
    );
  }
}

export default App;
