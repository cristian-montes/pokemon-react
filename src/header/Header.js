import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    
    render() { 
        return (  
            <div className='header-div'>
                <div> 
                    POKEMON WORLD
                </div>

                <div className='links'>
                    <NavLink exact to='/'>
                        Home
                    </NavLink>
                    <NavLink to='/pokemon'>
                        Pokemon List
                    </NavLink>
                </div>

            </div>
        );
    }
}
 
export default Header;