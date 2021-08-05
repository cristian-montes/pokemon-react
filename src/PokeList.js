import React, { Component } from 'react';
import PokeItem from './PokeItem.js';

class PokeList extends Component {
    render() { 
        return (  
            <ul>
                {this.props.pokeData.map((item) => {
                    return <PokeItem key={item.id} pokes={item}/>;
                })}
            </ul>
        );
    }
}
 
export default PokeList;