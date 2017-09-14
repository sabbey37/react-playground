import React, {Component} from 'react';
import Location from './Location';
import {connect} from 'react-redux';
import {addResource} from './actions';

const LocationList = ({locations}) => (
    <div>
        {Object.keys(locations).map(key => (
            <Location
              name={locations[key].name}
              resources={locations[key].resources}
            />
        ))}
    </div>
)

const mapStateToProps = state => ({
    locations: state.locations
});

const mapDispatchToProps = dispatch => {
    return {
        onAddResourcesClick: (resource, id, howMany) => {
            dispatch(addResource(resource, id, howMany))
        }
    }
}

const LocationContainer = connect (
    mapStateToProps,
    mapDispatchToProps
)(LocationList)

export default LocationContainer;