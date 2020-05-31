import React, { Component } from 'react';
import './Demo.css';
export default class  extends Component {
    state = {  
        name : "Amir Zamani"
    }
    render() { 
        return ( 
            <div className="maindiv_style">
                <h1 >
                    {this.props.name} Component
                </h1>
                <p>Demo Component</p>
            </div>
         );
    }
}
 
