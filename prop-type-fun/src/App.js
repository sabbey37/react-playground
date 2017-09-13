import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Spaceship from './Spaceship';
import CrewMember from './CrewMember';
import BadAlien from './BadAlien';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Spaceship name="Supernova" commanderType="BadAlien">
            <CrewMember name="Spock" rank="highest" />
            <CrewMember name="Ryker" rank="Commander" />
            <BadAlien name="Bjork" species="Borg" />
        </Spaceship>
      </div>
    );
  }
}

export default App;
