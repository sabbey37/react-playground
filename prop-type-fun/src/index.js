import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import actions from './actions';
import starTrekApp, {LOCATIONS} from './reducers';
import {createStore} from 'redux';

const store = createStore(starTrekApp);

window.store = store;
window.TRANSFER_CRYSTALS = actions.TRANSFER_CRYSTALS;
window.ADD_PLANET = actions.ADD_PLANET;
window.ADD_SHIP = actions.ADD_SHIP;
window.ADD_MEMBER = actions.ADD_MEMBER;
window.BEAM_MEMBER = actions.BEAM_MEMBER;
window.LOCATION_SHIP = LOCATIONS.LOCATION_SHIP;
window.PLANET_EARTH = LOCATIONS.PLANET_EARTH;
window.SUN = LOCATIONS.SUN;

store.dispatch({type: window.ADD_PLANET, id: 210, name: "Neptune", crystals: 50})
store.dispatch({type: window.ADD_PLANET, id: 211, name: "SUN", crystals: 100})

store.dispatch({type: window.ADD_SHIP, id: 373, max_load: 500, name: "Chariot", max_load: 1000})

store.dispatch({type: window.ADD_SHIP, id: 372, max_load: 500, name: "Grace", max_load: 2000})

store.dispatch({type: window.ADD_SHIP, id: 371, max_load: 500, name: "Meiko", max_load: 500})

store.dispatch({type: window.ADD_MEMBER, name: 'peppermint tea', rank:'therapeutic', id: 125, location: window.PLANET_EARTH, capacity: 100})

store.dispatch({type: window.ADD_MEMBER, name: 'chamomile tea', rank:'soothing', id: 126, location: window.PLANET_EARTH, capacity: 50})

store.dispatch({type: window.ADD_MEMBER, name: 'chai tea', rank:'spicy', id: 127, location: window.PLANET_EARTH, capacity: 75})

// store.dispatch({type: TRANSFER_CRYSTALS, planetId: 210, shipId: 373, howMany: 2})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
