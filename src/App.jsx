import React, { Component } from 'react';
import './App.css';
import Countries from "./view/CountryDetail";
import ListOfCountries from "./countries.json"


class App extends Component {
  render() {
    return (
      < div className="App" >

        {ListOfCountries.map(country => {
          return <Countries name={country.name.common} />
        }
        )};
        </div >
    );
  }
}

export default App;
