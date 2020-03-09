import React, { Component } from 'react'

export default class Borders extends Component {
  render() {
    const borders = this.props.borders;
    return (
      <ul>
        {
          borders.map(country => <li>{country}</li>)
        }
      </ul>
    )
  }
}
