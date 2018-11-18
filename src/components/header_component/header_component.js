import React, { Component } from 'react';
import NavBarComponent from './navbar_component';

export default class HeaderComponent extends Component {
  
  render () { 
    return (   
      <header>
        {this.props.country 
          ? (
            <NavBarComponent 
              country = {this.props.country}
            />
          )
          : (
            <h1>Choose the country which you are going to visit or about which you want to tell</h1>
          )
        }    
      </header>
    );
  }
};
