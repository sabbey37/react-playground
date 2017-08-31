import React, { Component } from 'react';

const CreateOption = ({place}, {id}) =>  (
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
        var options = [];
        this.props.cities.forEach((city) => {
            options.push(<CreateOption
            place={city.place}
            key={city.place}
            />);
        });
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