// Tip: make constants for action type strings

const ADD_MEMBER = 'ADD_MEMBER';
const BEAM_MEMBER = 'BEAM_MEMBER';
const ADD_SHIP = 'ADD_SHIP';
const ADD_PLANET = 'ADD_PLANET';
const MINE_CRYSTALS = 'MINE_CRYSTALS';
const HOLD_LUAU = 'HOLD_LUAU';

// {   type: ADD_MEMBER,
//     name: name,
//     rank: rank,
//     id: id,
//     location: location,
//     capacity: num
// }

// {   type: BEAM_MEMBER,
//     id: id,
//     location: location
// }

// {
//     type: ADD_SHIP,
//     name: name,
//     id: id,
//     max_load: num
// }

// {
//     type: ADD_PLANET,
//     name: name,
//     id: id,
//     mines: number
// }


export default {
    ADD_MEMBER,
    BEAM_MEMBER,
    ADD_SHIP, 
    ADD_PLANET,
    MINE_CRYSTALS,
    HOLD_LUAU
}