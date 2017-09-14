import React from 'react';
import LocationList from './Location';
import {connect} from 'react-redux';
import {addResource} from './actions';


const mapStateToProps = state => ({
    locations: state.locations
});

const mapDispatchToProps = dispatch => ({
    onAddResourcesClick: (resource, id, howMany) => {
            dispatch(addResource(resource, id, howMany))
        }
});

const LocationContainer = connect (
    mapStateToProps,
    mapDispatchToProps
)(LocationList);

export default LocationContainer;