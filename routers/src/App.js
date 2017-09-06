import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Jank from './Jank.js';
import Thing from './Thing.js';
import Bob from './Bob.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Jank />
        <Thing />
        <Bob />
      </div>
    );
  }
}

export default App;
