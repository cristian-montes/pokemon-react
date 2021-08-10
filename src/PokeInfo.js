import React, { Component } from 'react';
import './PokeInfo.css';

class PokeInfo extends Component {
    state = { data:{} };
    
    componentDidMount(){
        this.loadData();
      }

    loadData = async () => {
        const {id} = this.props.match.params;
        const url =`https://pokedex-alchemy.herokuapp.com/api/pokedex/${id}`;
        console.log(url);
        const response = await fetch(url);
        const dataAPI = await response.json();
        this.setState({data: dataAPI})
    }

    render() { 
        // const {id} = this.props.match.params;
        const {data} = this.state;
        console.log(data);
        return (  
            <div className='info-div'>
                
                <div className='poke-info'>
                    <img src={data.url_image} alt='pok' className='infoImg'/>
                    <p> {data.pokemon}</p>
                    <p>Type 1:{data.type_1}</p>
                    <p>Type 2:{data.type_2}</p>
                    <p>HP:{data.hp}</p>
                    <p>Attack:{data.attack}</p>
                    <p>Defense:{data.defense}</p>
                    <p>Speed:{data.speed}</p>
                    <p>Ability 1:{data.ability_1}</p>
                    <p>Ability 2:{data.ability_2}</p>
                    <p>Shape:{data.shape}</p>
                    <p>Pokebase: {data.pokebase}</p>
                </div>
                
            </div>
        );
    }
}
 
export default PokeInfo;