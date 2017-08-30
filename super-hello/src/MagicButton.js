import React from 'react';

const MagicButton = ({title, handleClick}) => (
    <button onClick={handleClick}>{title}</button>
);

// const logIt = (e) => {
//     e.preventDefault();
//     console.log(`The button said: ${e}`);
// }
export default MagicButton;