import React, { Component } from 'react';

class PokeItem extends Component {
    render() { 
        const {pokes} = this.props;
        return (  
            <div>
                <img src={pokes.url_image} alt='pokers'  width='200'/>
                <h4>{pokes.pokemon}</h4>
                <p>Type: {pokes.type_1}</p>
                <p>Shape: {pokes.shape}</p>
                <p>Ability 1: {pokes.ability_1}</p>
                <p>Defense: {pokes.defense}</p>
            </div>
        );
    }
}
 
export default PokeItem;