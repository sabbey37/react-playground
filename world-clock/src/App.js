import React, { Component } from 'react';
import './App.css';
import WorldClockDisplay from './WorldClock.js';

var TIMES = [
    {place: 'New York City, NY, USA', timeZone: 'America/New_York'},
    {place: 'New Orleans, LA, USA', timeZone: 'America/Chicago'},
    {place: 'Seattle, WA, USA', timeZone: 'America/Los_Angeles'}
]

class App extends Component {
  render() {
    return (
      <div className="App">
          <WorldClockDisplay times={TIMES} />
      </div>
    );
  }
}

export default App;
