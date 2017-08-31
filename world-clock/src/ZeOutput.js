import React from 'react';

const SearchOutput = ({text, transformText}) => (
    <p>{transformText(text)}</p>
);

export default SearchOutput;