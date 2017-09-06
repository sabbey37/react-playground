import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Jank from './Jank.js';
import Thing from './Thing.js';
import Bob from './Bob.js';

const navs = [
    <Jank />,
    <Thing />,
    <Bob />
]

const navNames = [
    "Jank",
    "Thing",
    "Bob"
]

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentNav: 0
        }
    }
  render() {
      const componentToRender = navs[this.state.currentNav];
      const myNavs = navs.map((comp, idx) => (
           <li>
               <a href="#" onClick={(e) => {
                e.preventDefault();
                this._changeNav({idx})}}>{navNames[idx]}
               </a>
            </li>
      ))

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ul>
            <li><a href="#" onClick={(e) => {
                e.preventDefault();
                this._changeNav(0);
                }}>Jank</a></li>
            <li><a href="#" onClick={(e) => {
                e.preventDefault();
                this._changeNav(1);
                }}>Thing</a></li>
            <li><a href="#" onClick={(e) => {
                e.preventDefault();
                this._changeNav(2);
                }}>Bob</a></li>
        </ul>
        {componentToRender}
      </div>
    );
  }

    _changeNav = (val) => {
        this.setState({
            currentNav: val
        });
    }
}

export default App;
