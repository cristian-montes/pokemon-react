import React, { Component } from 'react';
import PokeList from './poke/PokeList';
import DropDown from './dropDown/DropDownList';
import Scroll from './scroll/Scroll';
import LoadingSpinner from './loading/LoadingSpinner';

class PokeContainer extends Component {
    state = { 
        data:[], 
        loading: true,
        query: null, 
        sortOrder: 'asc',
        page:1,
        lastPage:1
       };

componentDidMount(){
    this.fetchData();
  }

//GET DATA FROM APIS
fetchData = async () => {
  let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
   let searchParams =new URLSearchParams();
   searchParams.set('page', this.state.page)

   if(this.state.query){
     searchParams.set('pokemon', this.state.query);
  } 

  searchParams.set('sort', 'defense');
  searchParams.set('direction', this.state.sortOrder);

  url = url + `?${searchParams.toString()}`;
  let response = await fetch(url);
  let dataAPI = await response.json();

  const ultimaPagina = Math.ceil(dataAPI.count/dataAPI.perPage)

  this.setState({ data: dataAPI.results, loading:false, lastPage: ultimaPagina});
 
};

//SORT DATA USING DROPDOWN
handleSortOrderData = async (event) => {
let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
let searchParams = new URLSearchParams();

if(this.state.sortOrder){
    searchParams.set('sort', 'defense');
    searchParams.set('direction', this.state.sortOrder);
}
url = url + `?${searchParams.toString()}`;
// url = url + `?sort=defense&direction=${this.state.sortOrder}`;
let response = await fetch(url);
let dataAPI = await response.json();

this.setState({ data: dataAPI.results, loading:false, });
}

// GET USER IMPUT TO SEARCH
updateQuery = (event) => {
this.setState({query: event.target.value});
}

//GET USER IMPUTS TO SORT
changeOrder = async (event) => {
    console.log('in change order');
    await this.setState({sortOrder: event.target.value});
    this.handleSortOrderData();
// this.fetchData();
}

nextPage = async () => {
    await this.setState({ page: this.state.page + 1})
    this.fetchData();
};

previousPage = async () => {
    await this.setState({ page: this.state.page - 1})
    this.fetchData();
};

lastPage = async () => {
    await this.setState({ page: this.state.lastPage})
    this.fetchData();
};

searchPoke = async ()=>{
    await this.setState({page: 1});
    this.fetchData();
}



render() { 
const {loading,sortOrder} = this.state;

return ( 
  <div className="App">
      <div className='search-div'>
        <h1> POKEMONS</h1>
        <input onChange={this.updateQuery} type='text' ></input>
        <DropDown valor={sortOrder} changeSort={this.changeOrder} />
        <button onClick={this.searchPoke}>Search Pokemon</button>
    </div>

    <div className='control-div'>
        {this.state.page > 1 && (
           <button onClick={this.previousPage}>Previous Page</button>
        )}

        {this.state.page < this.state.lastPage && (
            <>
                <button onClick={this.nextPage}>Next Page</button>
                <button onClick={this.lastPage}>Last Page</button>
            </>
        )}
        
    </div>

     {loading && <LoadingSpinner/>}
     {!loading && (
      <div>
        <Scroll>
            <PokeList pokeData={this.state.data}/>
        </Scroll>
      </div>
    )}
</div>
 );
}
}
 
export default PokeContainer;
