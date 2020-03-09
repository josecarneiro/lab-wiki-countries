import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import countries from './../../countries.json';
import { Link } from 'react-router-dom';

class CountryDetail extends Component {
    constructor(){
        super();
        this.state = {
            country: null,
            borders: []
        }
    }

    componentDidUpdate(previousProps, previousState) {
        const countryChanged = previousProps.match.params.cca3 !== this.props.match.params.cca3;
        if(countryChanged) this.changeCountryDetail();
    }

    componentDidMount(){
        this.changeCountryDetail();
    }

    changeCountryDetail(){
        const abv = this.props.match.params.cca3;
        
        const country = countries.find((country) => abv === country.cca3);
        const bordersCountry = country.borders;
        const borders = countries.filter((country) => bordersCountry.includes(country.cca3)).map(country => {
            return{
                name: country.name.common,
                cca3: country.cca3
            }    
        });


        this.setState({
            country: country,
            borders: borders
        })
    }

    render() {
        
        return (
        <div>
            {this.state.country && 
            <Card className="detailcountry">
                <Card.Body>
                    <Card.Title>{this.state.country.name.common}</Card.Title>
                <Card.Text>
                    <strong>Capital:</strong> {this.state.country.capital[0]}
                </Card.Text>
                <Card.Text>
                    <strong>Area:</strong> {this.state.country.area} km^2
                </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    {
                        this.state.borders.length > 0 && <strong>Borders:</strong>
                    }
                    {
                        this.state.borders.map((border, index) => (
                            <Link  key={index} to={border.cca3}>
                                <ListGroup.Item>{ border.name }</ListGroup.Item>
                            </Link>
                        ))
                    }
                </ListGroup>
            </Card>
            }
        </div>
        );
    }
}

export default CountryDetail;
