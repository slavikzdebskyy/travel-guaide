import React, { Component } from 'react';
import { withRouter } from 'react-router';

import './styles.main.scss';


class CitiesList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: -1    
    };
  }  

  selectCity = (index) => {
    const pathName = this.props.location.pathname + '/' + this.props.citiesList[index];
    this.setState({ selectedIndex: index });
    this.props.router.push(pathName);
  };

  render() {
    return (
      <div className = 'cities-component-container'>
        <h2>Cities</h2>
         <ul>
      {this.props.citiesList.map((city, index) => {
        return (         
          <li 
            key = {index}
            className={index === this.state.selectedIndex ? 'city selected' : 'city'} 
            onClick = {() => this.selectCity(index)}            
            >
            {city}
          </li>          
        )
      })
        }
        </ul>
      </div>
    );
  }
}

export default  withRouter(CitiesList);



