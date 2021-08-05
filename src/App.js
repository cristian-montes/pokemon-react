import React, { Component } from 'react';
// import './App.css';
import PokeList from './PokeList';

class App extends Component {
  state = { data:[] };

   fetchData = async () => {
      let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
      let response = await fetch(url);
      let dataAPI = await response.json();
      console.log(dataAPI.results)

      this.setState({ data: dataAPI.results});
     
   };

   
   componentDidMount(){
     this.fetchData();
   }
  
  render() { 
    return ( 
      <div>
          <PokeList pokeData={this.state.data}/>
      </div>
     );
  }
}
 
export default App;



