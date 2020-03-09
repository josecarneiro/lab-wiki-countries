// import React, { Component } from 'react';

// import Countries from '../countries.json';

// export default class infoCountry extends Component {
//   constructor(props){
//     super(props);
//     this.state={
//       country:null
//     };
//   }

//   componentDidMount(previousProps, previousState){
//     const countriesChanged = previousProps.match.params.name 
//                             !== this.props.match.params.name;
//     if(countriesChanged){
//       this.fetchData();
//     }
//   }

//   fetchData (){
//     const countryChoose=this.props.match.params.name;
//     const country = Countries.find(country => country.cca3 === countryChoose );
//     this.setState({
//       country
//     })
//   }

//   render() {
//     const country = this.state.country;
//     return (
//       (country && (
//           <div>
//             <p>{country.name.official}</p>
//           </div>
//         )) || 'rfgfgfd'
//     )
//   }
// }

import React, { Component } from 'react';

import Countries from '../countries.json';
import Borders from '../components/Borders';

export default class infoCountry extends Component {
  constructor(props){
    super(props);
    this.state={
      country:null
    };
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    const routeCountry = this.props.match.params.name;
    const countryFound = Countries.find( country => country.cca3 === routeCountry);

    this.setState({
      country:countryFound
    });
  }

  render() {
    const country = this.state.country;

    console.log(country);

    return (
      ( country && (
        <div>
          <h1>{country.name.common}</h1>
          <p><strong>Capital:</strong>{country.capital[0]}</p>
          <p><strong>Area</strong>{country.area} km²</p>
          {( country.borders && (
                <p><strong>Borders:</strong><Borders borders={country.borders}/></p>)) }
        </div>)) ||
        (<p>NOT DEF</p>)
      
    )
  }
}


// import React from 'react'

// const infoCountry = (props) => {
  
//   return (
//     <div>
//       <p>Second page</p>
//     </div>
//   )
// }

// export default infoCountry;

