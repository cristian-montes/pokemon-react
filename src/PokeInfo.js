import React, { Component } from 'react';

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
            <div>
                <h1> {data.pokemon}</h1>
                <div className='poke-info'>
                    <img src={data.url_image} alt='poke'/>
                </div>
            </div>
        );
    }
}
 
export default PokeInfo;