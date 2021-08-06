import React, { Component } from 'react';

class DropDown extends Component {
    render() { 
        return (  
            <div>
                <select onChange={this.props.onChangeOrder}>
                    <option  value='asc'> Ascending </option>
                    <option value='desc'> Descending </option>
                </select>
            </div>
        );
    }
}
 
export default DropDown;