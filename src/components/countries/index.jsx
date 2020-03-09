import React, { Component } from 'react'

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

export class index extends Component {
  render() {
    const { countrie } = this.props;
  
    return (
      <div>
      <Link className="list-group-item list-group-item-action" to={`/${countrie.cca3}`} >
      
      <h5>{countrie.flag}</h5> <h5 >{countrie.name.official}</h5>
      </Link> 
        
      </div>
    )
  }
}

export default index
