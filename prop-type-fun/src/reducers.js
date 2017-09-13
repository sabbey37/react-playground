import actions from './actions';

export const LOCATIONS = {
    TRANSPORTER_ROOM: 'TRANSPORTER_ROOM',
    LOCATION_SHIP: 'LOCATION_SHIP',
    PLANET_EARTH: 'PLANET_EARTH',
    SUN: 'SUN'
}

const crewMembers = (state = [], action) => {
    switch(action.type) {
        case actions.ADD_MEMBER:
            return state.concat({
                name: action.name,
                rank: action.rank,
                id: action.id,
                location: action.location
            })
        case actions.BEAM_MEMBER:
            return state.map((crewMember) => {
                if(action.id === crewMember.id && action.location in LOCATIONS) {
                    return Object.assign({}, crewMember, {location: action.location});
                } else {
                    return crewMember;
                }
            });
        default:
            return state;

    }
}

export default crewMembers;