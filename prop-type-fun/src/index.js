import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import actions from './actions';
import crewMembers, {LOCATIONS} from './reducers';
import {createStore} from 'redux';

const store = createStore(crewMembers);

window.store = store;
window.ADD_MEMBER = actions.ADD_MEMBER;
window.BEAM_MEMBER = actions.BEAM_MEMBER;
window.LOCATION_SHIP = LOCATIONS.LOCATION_SHIP;
window.PLANET_EARTH = LOCATIONS.PLANET_EARTH;
window.SUN = LOCATIONS.SUN;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
