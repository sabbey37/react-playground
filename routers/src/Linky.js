import React from 'react';

// This is what Link does in React Router Dom
const Link = (props) => (
    <a href={props.to}>{props.children}</a>
);

export default Link;