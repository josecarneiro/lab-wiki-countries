import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import CountryDetails from './views/CountryDetails';
import Navbar from './views/Navbar';
import Content from './views/Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Content />
          <Route exact path="/:cca3" component={CountryDetails} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
