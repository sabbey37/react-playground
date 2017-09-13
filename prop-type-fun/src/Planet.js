import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Planet extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        classification: PropTypes.string.isRequired,
        children: PropTypes.node
    }

    static defaultProps = {
        classification: "Unknown"
    };

    render() {
        const {name, classification, children} = this.props;
        return (
            <div>
                <h1>{name.toUpperCase()} [{classification} class]</h1>
                {children}
            </div>
        );
    }
}

export default Planet;

