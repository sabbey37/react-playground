import * as actions from './actions';
import {combineReducers} from 'redux';
import _ from 'lodash';


// const ships = (state=[], action) => {
//     switch (action.type) {
//         case actions.ADD_SHIP:
//             return [
//                 ...state,
//                 {
//                     id: action.id,
//                     name: action.name,
//                     crystals: 0,
//                     max_load: action.max_load
//                 }
//             ]
//         case actions.REMOVE_CRYSTALS:
//             return state.map( (ship) => (
//                 (action.id === ship.id)
//                 ? { ...ship, crystals:  ship.crystals - action.howMany }
//                 : ship
//             ));
//         case actions.ADD_CRYSTALS:
//             return state.map( (ship) => (
//                 (action.id === ship.id)
//                 ? { ...ship, crystals:  ship.crystals + action.howMany }
//                 : ship
//             ));
//         default:
//             return state;
//     }
// }

const locations = (state = {'planets': {}, 'ships': {}}, action) => {
    switch(action.type) {
        case actions.ADD_LOCATION:
            let newState = {...state};
            if (action.locationType === "planet") {
                newState["planets"][String(action.id)] = {
                id: action.id,
                name: action.name,
                resources: action.resources
            };

            } else {
                newState["ships"][String(action.id)] = {
                id: action.id,
                name: action.name,
                resources: action.resources
            };
            }

            return newState;
        case actions.REMOVE_RESOURCE:
            return state.map( (planet) => (
                (action.id === planet.id)
                ? { ...planet, crystals:  planet.crystals - action.howMany }
                : planet
            ));
        case actions.ADD_RESOURCE:
            newState = {...state};
            let changeLocation;
            let arrLocations = _.flatten(Object.keys(newState).map( loc => {
                return [].concat(_.values(newState[loc]))
            }))
            changeLocation = arrLocations.filter(loc => loc.id === action.id);

            changeLocation.resources = {
                ...changeLocation.resources,
                [action.resource]: changeLocation.resource[action.resource] + howMany
            }
            
            return newState;
        default:
            return state;
    }
}

const crewMembers = (state = [], action) => {
    switch(action.type) {
        case actions.ADD_MEMBER:
            // Equivalent to state.concat version, using spread operator
            return [
                ...state,
                {
                    name: action.name,
                    rank: action.rank,
                    id: action.id,
                    location: action.location,
                    carry_capacity: action.capacity 
                }
            ]
            // return state.concat({
            //     name: action.name,
            //     rank: action.rank,
            //     id: action.id,
            //     location: action.location
            // })
        case actions.BEAM_MEMBER:
            return state.map((crewMember) => {
                if(action.id === crewMember.id) {
                    let newLocation = action.location;
                    return {
                        ...crewMember,
                        location: newLocation
                    }
                    // Longer version of Object cloning
                    // return Object.assign({}, crewMember, {location: action.location});
                } else {
                    return crewMember;
                }
            });
        default:
            return state;

    }
}

export default combineReducers({
    crewMembers,
    locations
});