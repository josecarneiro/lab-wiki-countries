import React, { Component } from 'react'

export default class countrieSingle extends Component {
  render() {
    const {name} = this.props;
    return (
      <div>
        <p>Teste {name}</p>
      </div>
    )
  }
}
