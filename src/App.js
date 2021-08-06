import React, { Component } from 'react';
import './App.css';
import PokeList from './poke/PokeList';
import DropDown from './dropDown/DropDownList';
import Scroll from './scroll/Scroll'

class App extends Component {
  state = { 
            data:[], 
            loading: true,
            query: null, 
            sortOrder: 'asc'
           };

    componentDidMount(){
        this.fetchData();
      }

    //GET DATA FROM APIS
   fetchData = async () => {
      let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
      if(this.state.query){
        url = url + `?pokemon=${this.state.query}`;
      } 

      let response = await fetch(url);
      console.log(response, 'link1');
      let dataAPI = await response.json();

      this.setState({ data: dataAPI.results, loading:false, });
     
   };


   handleSortOrderData = async (event) => {
    let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
    if(this.state.sortOrder){
      url = url + `?sort=defense&direction=${this.state.sortOrder}`;
    }
    let response = await fetch(url);
    console.log(response, 'link2');
    let dataAPI = await response.json();

    this.setState({ data: dataAPI.results, loading:false, });
   }

  updateQuery = (event) => {
    this.setState({query: event.target.value});
  }



//GET USER IMPUTS
  changeOrder = async (event) => {
    await this.setState({sortOrder: event.target.value});
    this.handleSortOrderData();
 }
   
  


  
  render() { 
    if(this.state.loading){
      return <h1>LOADING...</h1>
    }
    return ( 
      <div className="App">
          <div className='search-div'>
            <h1> POKEMONS</h1>
            <input onChange={this.updateQuery} type='text' ></input>
            <DropDown onChangeOrder={this.changeOrder} onChange={this.fetchData} />
            <button onClick={this.fetchData}>Search Pokemon</button>
          </div>
          <Scroll>
          <PokeList pokeData={this.state.data}/>
          </Scroll>
        </div>
     );
  }
}
 
export default App;



