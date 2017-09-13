import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Spaceship extends Component {
    static propTypes = {
        name: PropTypes.string
    };
    render(){
        const {name} = this.props;
        return (
            <div>
                <h1>{name}</h1>
            </div>
        );
    }
}

export default Spaceship;