import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';

import CountryDetail from './views/CountryDetail';
import Home from './views/Home';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <nav>
            <Link to="/">Home</Link>
          </nav>
          <Switch>
            <Route path="/:cca3" component={CountryDetail} />
            <Route path="/" component={Home} exact />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
