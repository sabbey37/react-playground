// Tip: make constants for action type strings

export const ADD_MEMBER = 'ADD_MEMBER';
export const BEAM_MEMBER = 'BEAM_MEMBER';
export const ADD_LOCATION = 'ADD_LOCATION';
export const ADD_RESOURCE = 'ADD_RESOURCE';
export const REMOVE_RESOURCE = 'REMOVE_RESOURCE';

// let objStr = {
//     locations: {
//     planets: {
//         '52': {
//             id: 52,
//             name: 'Pluto',
//             resources: {
//                 crystals: 1000
//             }
//         },
//         '54': {
//             id: 54,
//             name: 'Earth',  
//             resources: {
//                 crystals: 2000
//             }
//         }
//     },
//     ships: {
//         '1000': {
//             id: 1000,
//             name: 'Grace',
//             resources: {
//                 crystals: 0
//             }
//         }
//     }
//     }, 
//     crewMembers: {
//         '300': {
//             id: 200,
//             name: 'Peppermint Tea',
//             rank: 'Healing',
//             location: ['planets', id]
//         }
//     }
// }

export const addMember = (name, rank, id, locationType, locationId) => {
    return {type: ADD_MEMBER, name, rank, id, location: [locationType, locationId]};
}

export const beamMember = (id, location) => {
    return {type: BEAM_MEMBER, id, location};
}

export const addLocation = (id, name, locationType, resources) => {
    return {type: ADD_LOCATION, locationType, name, id, resources};
}

export const removeResource = (resource, id, howMany) => {
    return {type: REMOVE_RESOURCE, resource, id, howMany};
}

export const addResource = (resource, id, howMany) => {
    return {type: ADD_RESOURCE, resource, id, howMany};
}

// {
//     type: MINE_CRYSTALS,
//     planetid: ___,
//     memid: id,
//     
// }
// {
//     type: ADD_SHIP,
//     name: name,
//     id: id,
//     max_load: num
// }


// export default {
//     ADD_MEMBER,
//     BEAM_MEMBER,
//     ADD_LOCATION,
//     ADD_RESOURCE,
//     REMOVE_RESOURCE,
//     addLocation,
//     removeResource,
//     addResource,
//     beamMember,
//     addMember
// }