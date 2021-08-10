import React, { Component } from 'react';

class DropDown extends Component {
    render() { 
        return (  
            <div>
                <select defaultValue={this.props.valor} onChange={this.props.changeSort}>
                    <option  value='asc'> Ascending </option>
                    <option value='desc'> Descending </option>
                </select>
            </div>
        );
    }
}

export default DropDown;