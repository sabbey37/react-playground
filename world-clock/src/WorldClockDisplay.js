import React, { Component } from 'react';
import WorldClock from './WorldClock.js'

class WorldClockDisplay extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        if (this.props.times.length !== 0 || this.props.times !== undefined) { 
            var clocks = Object.keys(this.props.times).map((key, i) => (
                <WorldClock place={key} timeZone={this.props.times[key].timeZone} key={i} />
            ));
        }
        return (
            <div>
                {clocks}
            </div>
        );
}
}

export default WorldClockDisplay;