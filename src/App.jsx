import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import CountryDetail from './views/CountryDetail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/:countryCode" exact component={CountryDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
