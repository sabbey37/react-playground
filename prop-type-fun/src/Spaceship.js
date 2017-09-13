import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CrewMember from './CrewMember';

class Spaceship extends Component {
    static propTypes = {
        name: PropTypes.string,
        children: PropTypes.node.isRequired,
        commanderType: PropTypes.string
    };

    static defaultProps = {
        commanderType: CrewMember
    }

    render(){
        const {name, children, commanderType} = this.props;
        const creaturesOnBoard = children.map((child, idx) => {
            if (child.type.name === commanderType){
                return child;
            
            } else {
                return (
                    <div className="alert-alert" key={idx}>
                        {child}
                    </div>
                );
            }
        });
        return (
            <div>
                <h1>{name}</h1>
                {creaturesOnBoard}
            </div>
        );
    }
}

export default Spaceship;