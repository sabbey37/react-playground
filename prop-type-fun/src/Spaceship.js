import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Spaceship extends Component {
    static propTypes = {
        name: PropTypes.string,
        children: PropTypes.node.isRequired
    };

    render(){
        const {name, children} = this.props;
        return (
            <div>
                <h1>{name}</h1>
                {children}
            </div>
        );
    }
}

export default Spaceship;