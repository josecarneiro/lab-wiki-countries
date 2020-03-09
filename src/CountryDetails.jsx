import React, { Component } from 'react'
import Countries from './countries.json'
import { Link } from 'react-router-dom';

class CountryDetails extends Component {
  constructor(props){
    super(props);
    this.state = {
      country: null,
    };
  }

  componentDidMount(){
    this.fetchData();
  }
  componentDidUpdate(propsState){
    const countryChanged = propsState.match.params.cca3 !== this.props.match.params.cca3;
    if (countryChanged) {
      this.fetchData();
    }
  }
  fetchData(){
    //console.log("fetching data")
    const cca3 = this.props.match.params.cca3;
    console.log(cca3)
    const country = Countries.find(item => item.cca3 === cca3);
    //console.log(country)
    this.setState({
      country
    });
  }

  render() {    
    const country = this.state.country
    return (
      (country && (
      <div>
          <div className="col-7">
            <h1>{country.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: 400}}>Capital</td>
                  <td>{country.capital.toString()}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{country.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {country.borders.map(item => <li key={item}><Link to={item}>{item}</Link></li>)}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    </div>
     )) || ''  
   );
 }
}

export default CountryDetails