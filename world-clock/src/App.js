import React, { Component } from 'react';
import './App.css';
import WorldClockDisplay from './WorldClockDisplay.js';
import CityOptions from './options.js';
import SearchInput from './search.js';
import SearchOutput from './ZeOutput.js';
import utils from './utils.js';

var ZONES = {
     'Choose a city': undefined,
     'New York City, NY, USA': 'America/New_York', 
     'New Orleans, LA, USA': 'America/Chicago',
     'Seattle, WA, USA': 'America/Los_Angeles',
     'Maputo, Mozambique': 'Africa/Maputo',
     'La Paz, Bolivia': 'America/La_Paz',
     'Oslo, Norway': 'Europe/Oslo',
     'Reykjavik, Iceland': 'Atlantic/Reykjavik',
     'Sydney, Australia': 'Australia/Sydney',
     'Tehran, Iran': 'Asia/Tehran',
     'Tokyo, Japan': 'Asia/Tokyo',
     'Cape Verde': 'Atlantic/Cape_Verde',
     'Lagos, Nigeria': 'Africa/Lagos'
}

var CITIES = {}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: {},
            label: 'Maybz?',
            text: 'YUSSSS'
        };
    }
    _handleCitySelect = (e) => {
        var city = e.target.value;
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
        this.setState({
            cities: CITIES
        })
    }
  render() {
    return (
      <div className="App">
          <h1>World Clocks</h1>
          <p>Please select a city to add a clock to the page</p>
          <CityOptions cities={ZONES}
             onCitySelect={this._handleCitySelect}
          />
          <WorldClockDisplay times={this.state.cities} 
            deleteHandler={this._deleteClock}/>
      </div>
    );
  }
  _updateText = (event) => {
      this.setState({
          text: event.target.value
      })
  }
}

export default App;



{/*<h1>{this.state.label}</h1>
          <SearchInput text={this.state.text} changeHandler={this._updateText} />
          <SearchOutput 
          transformText={utils.transformText}
          text={this.state.text}/>*/}
