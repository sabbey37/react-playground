import React, { Component } from 'react';
import './App.css';
import WorldClockDisplay from './WorldClockDisplay.js';
import CityOptions from './options.js';

var TIMES = [
    {place: 'New York City, NY, USA'},
    {place: 'New Orleans, LA, USA'},
    {place: 'Seattle, WA, USA'},
    {place: 'Maputo, Mozambique'},
    {place: 'La Paz, Bolivia'},
    {place: 'Oslo, Norway'},
    {place: 'Reykjavik, Iceland'},
    {place: 'Sydney, Australia'},
    {place: 'Tehran, Iran'},
    {place: 'Tokyo, Japan'}
]

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
        const newCity = {timeZone: ZONES[city]};
        CITIES[city] = newCity;
        this.setState({
            cities: CITIES
        })

    }
  render() {
    return (
      <div className="App">
          <h1>World Clocks</h1>
          <p>Please select a city to add a clock to the page</p>
          <CityOptions cities={TIMES}
             onCitySelect={this.handleCitySelect}
          />
          <WorldClockDisplay times={this.state.cities} />
      </div>
    );
  }
}

export default App;
