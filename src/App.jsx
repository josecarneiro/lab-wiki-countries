import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import data from './countries.json';

import CountryDetail from './views/CountryDetail';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <div class="row">
            <div class="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
              <div>
                <ul>
                  {data.map(item => (
                    <Link class="list-group-item list-group-item-action" to={item.cca3}>
                      {item.flag}
                      {item.name.common}
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
            <Switch>
              <Route path="/:cca3" exact component={CountryDetail} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
