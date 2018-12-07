import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import setCurrentLocationsAction from '../redux/actions/set.current.location.action';
import { setHeaderBackgroundByCityAction } from '../redux/actions/set.header.background.actions';
import { getCurrentCityAction } from '../redux/actions/get.data.actions';

class CitiesList extends Component {

  selectCity = index => { 
    this.props.setCurrentCity(this.props.citiesList[index]);
    this.props.setCurrentLocation(this.props.match.params.country, this.props.citiesList[index]);
    this.props.setHeaderBackground(this.props.citiesList[index]);    
    const pathName = '/' + this.props.match.params.country + '/' + this.props.citiesList[index];    
    this.props.history.push(pathName);
  };

  render() {
    return (
         <ul className = 'city-list-container'>
           <li><h2 className = 'cities-list'>Cities</h2></li>
      {this.props.citiesList.map((city, index) => {
        return (         
          <li 
            key = {index}
            className = 'city' 
            onClick = {() => this.selectCity(index)}            
            >
            {city}
          </li>          
        )
      })
        }
        </ul>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentCity: state.cities.find(item => item.name === ownProps.match.params.city),
    citiesList: state.cities.map(item => item.name)
    
  }
}

const mapDispatchToProps = dispatch => ({ 
  setCurrentLocation: (currCountry, currCity) => {
    dispatch(setCurrentLocationsAction({currentCountry: currCountry, currentCity: currCity}))
  },
  setHeaderBackground : cityName => {
    dispatch(setHeaderBackgroundByCityAction(cityName))
  },
  setCurrentCity: cityName => {
    dispatch(getCurrentCityAction(cityName))
  } 
})

export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(CitiesList));
