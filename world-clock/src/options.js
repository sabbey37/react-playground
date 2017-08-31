import React, { Component } from 'react';

const CreateOption = ({place}) =>  (
        <option value={place}>{place}</option>
    )

class CityOptions extends React.Component {
    constructor(props) {
        super(props);
        this.handleValueChange=this.handleValueChange.bind(this);
    }
    handleValueChange(e) {
        this.props.onCitySelect(e.target.value);
    }

    render() {
        var options = Object.keys(this.props.cities).map((city, idx) => (
        <CreateOption
            place={city}
            key={idx}
            />
        ));
        return ( 
            <form>
                <select onChange={this.handleValueChange}>
                    {options}
                </select>
            </form>
        );
    }
}

export default CityOptions;