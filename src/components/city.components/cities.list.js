import React, { Component } from 'react';
import { withRouter } from 'react-router';

import './styles.city.scss';


class CitiesList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: -1    
    };
  }  

  setSelectedCity () {
    if (this.props.params.city) {
      const index = this.props.citiesList.indexOf(this.props.params.city);
      this.setState({ selectedIndex: index });
    }
  }

  selectCity = (index) => {
    this.setState({ selectedIndex: index });
    const pathName = '/' + this.props.params.country + '/' + this.props.citiesList[index];    
    this.props.router.push(pathName);
  };

  componentDidMount() {
    this.setSelectedCity();
  }

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

export default withRouter(CitiesList);
