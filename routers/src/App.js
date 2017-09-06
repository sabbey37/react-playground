import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

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
        <BrowserRouter>
            <div>
                <ul>
                    <li><Link to="/">Jank</Link></li>
                    <li><Link to="/bob">Bob</Link></li>
                    <li><Link to="/thing">Thing</Link></li>
                </ul>
                <Switch>
                    <Route exact path = "/" component={Jank} />
                    <Route path = "/bob" component={Bob} />
                    <Route path = "/thing" component={Thing} />
            {/*Switch allows user to add default route (will redirect user there if page not found)*/}
                    <Route render={() => (
                        <p>Page not found: No Soup for you!</p>
                        )} />
                </Switch>
            </div>
        </BrowserRouter>
        {/*{componentToRender}*/}
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
