import React from 'react';
import './Scroll.css';

const Scroll = (props) => {
        return (  
            <div className='scroll-div'>
                {props.children}
            </div>
        );
    
}
 
export default Scroll ;