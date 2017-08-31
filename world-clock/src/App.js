import React, { Component } from 'react';
import './App.css';
import WorldClockDisplay from './WorldClockDisplay.js';
import CityOptions from './options.js';

var ZONES = {
     'New York City, NY, USA': 'America/New_York', 
     'New Orleans, LA, USA': 'America/Chicago',
     'Seattle, WA, USA': 'America/Los_Angeles',
     'Maputo, Mozambique': 'Africa/Maputo',
     'La Paz, Bolivia': 'America/La_Paz',
     'Oslo, Norway': 'Europe/Oslo',
     'Reykjavik, Iceland': 'Atlantic/Reykjavik',
     'Sydney, Australia': 'Australia/Sydney',
     'Tehran, Iran': 'Asia/Tehran',
     'Tokyo, Japan': 'Asia/Tokyo'
}

var CITIES = {}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: {}
        };
        this.handleCitySelect = this.handleCitySelect.bind(this);
    }
    handleCitySelect(city) {
        const newCity = ZONES[city];
        CITIES[city] = newCity;
        delete ZONES[city];
        this.setState({
            cities: CITIES
        })

    }
     _deleteClock = (city) => {
        ZONES[city] = CITIES[city];
        delete CITIES[city];
        let newCities = {};
        for (let c in this.state.cities) {
            if (c !== city) {
                newCities[c] = this.state.cities[c]
            }
        }
        this.setState({
            cities: newCities
        })
    }
  render() {
    return (
      <div className="App">
          <h1>World Clocks</h1>
          <p>Please select a city to add a clock to the page</p>
          <CityOptions cities={ZONES}
             onCitySelect={this.handleCitySelect}
          />
          <WorldClockDisplay times={this.state.cities} 
            deleteHandler={this._deleteClock}/>
      </div>
    );
  }
}

export default App;
