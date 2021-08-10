import React, { Component } from 'react';
import loader from './loader.gif';

class LoadingSpinner extends Component {
    
    render() { 
        return (  
            <div>
                <img src={loader} alt='loading'/>
            </div>
        );
    }
}
 
export default LoadingSpinner;