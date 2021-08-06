import React, { Component } from 'react';
import PokeItem from './PokeItem.js';

class PokeList extends Component {
    render() { 
        return (  
            <div>
                {this.props.pokeData.map((item) => {
                    return <PokeItem key={item.id} pokes={item}/>;
                })}
            </div>
        );
    }
}
 
export default PokeList;