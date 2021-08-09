import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './header/Header';
import PokeContainer from './PokeContainer';
import Home from './Home';
import PokeInfo from './PokeInfo';
import './App.css';

class App extends Component {
  render(){
    return(
      <section className='app'>
        <BrowserRouter>
            <Header/>
            <Switch>
               <Route path='/pokemon/:id' component={PokeInfo}/>
               <Route path='/pokemon' component={PokeContainer}/>
               <Route path='/' component={Home}/>
               
            </Switch>
              
        </BrowserRouter>

           
      </section>
    );
  }
}
 
export default App;



