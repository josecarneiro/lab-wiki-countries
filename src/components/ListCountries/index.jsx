import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class ListCountries extends Component {

    render() {
        const { name, id, cca3 } = this.props;
        return (
            <Link to={cca3}>
                <ListGroup.Item key={id}>{ name.common }</ListGroup.Item>
            </Link>
        );
    }
}

export default ListCountries;
