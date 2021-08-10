import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Poke.css';

class PokeItem extends Component {
    render() { 
        const {pokes} = this.props;
        return (  
            <div className='poke-div'>
                <img className='pokeImg' src={pokes.url_image} alt='pokers'  width='200'/>
                <h4>{pokes.pokemon}</h4>
                <p>Type: {pokes.type_1}</p>
                <p>Shape: {pokes.shape}</p>
                <p>Ability 1: {pokes.ability_1}</p>
                <p>Defense: {pokes.defense}</p>
                <Link to={`/pokemon/${pokes._id}`}>
                    <p> Click for More Info</p>
                </Link>
               
            </div>
        );
    }
}
 
export default PokeItem;