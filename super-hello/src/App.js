import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Readout from './Readout.js';
import MagicButton from './MagicButton.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theNumber: 999
        };
    }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Hotlanta</h2>
        </div>
        
          <Readout temperature={this.state.theNumber} unit="f" />
       

        <MagicButton 
        title="Press here for fun" 
        handleClick={this._changeNumber} 
        />
      </div>
    );
  }
  _changeNumber = () => {
        const newNumber = this.state.theNumber * this.state.theNumber;
        this.setState({
            theNumber: newNumber
        })
    }
}

export default App;
