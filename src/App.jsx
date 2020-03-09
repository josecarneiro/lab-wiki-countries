import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, ListGroup, Navbar } from 'react-bootstrap';
import CountryDetail from './view/CountryDetail';
import countries from './countries.json';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: '100%' }}>
        <BrowserRouter>
          <Navbar bg="primary">
            <Link to="/">
              <Navbar.Brand className="text-light">WikiCountries</Navbar.Brand>
            </Link>
          </Navbar>
          <Row style={{ maxHeight: '100vh' }}>
            <Col xs={5}>
              <ListGroup>
                {countries.map(country => (
                  <Link to={`/${country.cca3}`}>
                    <ListGroup.Item>
                      <img
                        style={{ width: '25px' }}
                        src={`https://www.countryflags.io/${country.cca2}/flat/64.png`}
                        alt={country.name.common}
                      />{' '}
                      {country.name.common}
                    </ListGroup.Item>
                  </Link>
                ))}
                ;
              </ListGroup>
            </Col>
            <Switch>
              <Route path="/:cca3" component={CountryDetail} exact />
            </Switch>
          </Row>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
