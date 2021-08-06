import React, { Component } from 'react';

class PokeItem extends Component {
    render() { 
        const {pokes} = this.props;
        return (  
            <div>
                <p>{pokes.pokemon}</p>
                <img src={pokes.url_image} alt='pokers' />
            </div>
        );
    }
}
 
export default PokeItem;