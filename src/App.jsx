import React, { Component } from 'react';
import './App.css';

/*IMPORT COUNTRIES*/
import Countries from './countries.json';


import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';


/**VIEWS */
import infoCountry from './view/infoCountry';
import home from './view/home';

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        
        
          <Switch>
            <Route path="/:name"
            component={infoCountry} exact />

            <Route path="/"
            component={home} exact />

          </Switch>
          
        
      </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
