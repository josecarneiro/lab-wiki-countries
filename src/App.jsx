import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Row, Col, ListGroup, Navbar, Container } from 'react-bootstrap';
import countries from './countries.json';
import CountryDetail from './Components/CountryDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    //console.log(countries);
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar bg="primary">
            <Link to="/">
              <Navbar.Brand className="text-light">Wiki Countries</Navbar.Brand>
            </Link>
          </Navbar>
          <Row style={{ maxHeight: '100vh' }}>
            <Col xs={5}>
              <Container style={{ maxHeight: '100vh' }}>
                <ListGroup>
                  {countries.map(country => (
                    <Link to={`/${country.cca3}`}>
                      <ListGroup.Item>
                        <img
                          style={{ width: '25px' }}
                          src={`https://www.countryflags.io/${country.cca2}/flat/64.png`}
                          alt={country.name.common}
                        />{' '}
                        <p className="countryList">{country.name.common}</p>
                      </ListGroup.Item>
                    </Link>
                  ))}
                  ;
                </ListGroup>
              </Container>
            </Col>
            <Col className="countryDetail">
              <Route path="/:cca3" component={CountryDetail} exact />
            </Col>
          </Row>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
