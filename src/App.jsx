import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';

import Nav from './Components/Nav';
import CountryDetail from './Components/CountryDetail';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    };
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/CountrDetail/:name" exact component={CountryDetail} />
          <Route path="/" exact component={Nav} />
        </Switch>
        <CountryDetail />
      </div>
    );
  }
}

export default App;
