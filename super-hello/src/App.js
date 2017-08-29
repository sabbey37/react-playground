import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Readout from './Readout.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Hotlanta</h2>
        </div>
        <p className="App-intro">
          <Readout temperature={10000} unit="f" />
        </p>
      </div>
    );
  }
}

export default App;
