import React, { Component } from 'react';
import './App.css';
import PokeList from './poke/PokeList';
import DropDown from './dropDown/DropDownList';

class App extends Component {
  state = { 
            data:[], 
            loading: true,
            query: null, 
            sortOrder: null
           };

   fetchData = async () => {
      let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
      if(this.state.query){
        url = url + `?pokemon=${this.state.query}`;
      } 
      if(this.state.sortOrder){
        url = url + `?sort=defense&direction=${this.state.sortOrder}`;
      }
      // console.log('in the button');
      let response = await fetch(url);
      console.log(response);
      let dataAPI = await response.json();

      this.setState({ data: dataAPI.results, loading:false, });
     
   };

  updateQuery = (event) => {
    this.setState({query: event.target.value});
  }

  changeOrder = async (event) => {
    await this.setState({sortOrder: event.target.value});
    this.fetchData();
 }
   
   componentDidMount(){
     this.fetchData();
   }
  
  render() { 
    if(this.state.loading){
      return <h1>LOADING...</h1>
    }
    return ( 
      <div className="App">
        <div>
          <h1> POKEMONS</h1>
          <input onChange={this.updateQuery} type='text' ></input>
          <DropDown onChangeOrder={this.changeOrder} onChange={this.fetchData} />
          <button onClick={this.fetchData}>Search Pokemon</button>
        </div>
          <PokeList pokeData={this.state.data}/>
      </div>
     );
  }
}
 
export default App;



