import React from 'react';

const Location = ({name, resources}) => (
    <div>
        <h1>{name}</h1>
        <ul>
            {
                Object.keys(resources).map(key => (
                    <li>{key}: {resources[key]}</li>
                ))
            }
        </ul>
    </div>
)

export default Location;