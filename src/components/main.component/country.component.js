import React, { Component } from 'react';

import './main.component.scss';

class CountryComponent extends Component {
  

   
  render () {        
    
    return (   
      <div className = 'country-component-container'>
        <h2>{this.props.countryInfo.title}</h2>
        { this.props.countryInfo.about.map((item, index) => {
          return (
            <div className = 'country-component-item' key = {index}>
              { item.subtitle ? <h3>{item.subtitle}</h3> : null }
              { item.picture ? <img src = {item.picture} alt = '#'/> : null }
              { item.text ? <p>{item.text}</p> : null }
            </div>            
          )
        })}
      </div>      
    );
  }
}
export default CountryComponent;
