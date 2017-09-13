import React, {Component} from 'react';

class Spaceship extends Component {
    render(){
        const {name} = this.props;
        <div>
            <h1>{name}</h1>
        </div>
    }
}

export default Spaceship;