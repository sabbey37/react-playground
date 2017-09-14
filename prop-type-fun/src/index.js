import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import * as actions from './actions';
import starTrekApp from './reducers';
import {createStore} from 'redux';

const store = createStore(starTrekApp);

window.store = store;

window.ADD_LOCATION = actions.ADD_LOCATION;
window.ADD_MEMBER = actions.ADD_MEMBER;
window.BEAM_MEMBER = actions.BEAM_MEMBER;
window.addLocation = actions.addLocation;
window.addResource = actions.addResource;


// store.dispatch({type: window.ADD_PLANET, id: 210, name: "Neptune", crystals: 50})
// store.dispatch({type: window.ADD_PLANET, id: 211, name: "SUN", crystals: 100})

// store.dispatch({type: window.ADD_SHIP, id: 373, max_load: 500, name: "Chariot", max_load: 1000})

// store.dispatch({type: window.ADD_SHIP, id: 372, max_load: 500, name: "Grace", max_load: 2000})

// store.dispatch({type: window.ADD_SHIP, id: 371, max_load: 500, name: "Meiko", max_load: 500})

// store.dispatch({type: window.ADD_MEMBER, name: 'peppermint tea', rank:'therapeutic', id: 125, location: window.PLANET_EARTH, capacity: 100})

// store.dispatch({type: window.ADD_MEMBER, name: 'chamomile tea', rank:'soothing', id: 126, location: window.PLANET_EARTH, capacity: 50})

// store.dispatch({type: window.ADD_MEMBER, name: 'chai tea', rank:'spicy', id: 127, location: window.PLANET_EARTH, capacity: 75})

// store.dispatch({type: TRANSFER_CRYSTALS, planetId: 210, shipId: 373, howMany: 2})

// const transferCrystals = (store, howMany, fromId, toId) => {
//     // getState, see if there are enough crystals
//     // then dispatch two actions
//     const allPlanets = store.getState().planets;
//     const thePlanet = allPlanets.filter(planet => fromId === planet.id)[0];

//     if(thePlanet.crystals >= howMany) {
//         store.dispatch({
//             type: actions.REMOVE_CRYSTALS,
//             howMany: howMany,
//             id: fromId
//         });
//         store.dispatch({
//             type: actions.ADD_CRYSTALS,
//             howMany: howMany,
//             id: toId 
//         })
//     } else {

//     }
    
// }

// window.transferCrystals = transferCrystals;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
