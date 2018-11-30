import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import CitiesList from '../cities.list';
import MustVisitList from './must.visit.list';
import Description from '../description';
import MustVisitInfo from './must.visit.info';

import setCurrentLocationsAction from '../../redux/actions/set.current.location.action';
import TopButton from '../top.button';


class CityComponent extends Component {  

  componentDidMount() {
    this.props.setCurrentCity(this.props.params.country, this.props.params.city);
  }

  render() {
    return (
      <div className = 'city-component-container'>  
        <Description 
          description = {this.props.currentCity.description}
          title = {this.props.currentCity.title}
        />   
        <CitiesList citiesList = {this.props.citiesList} />
        <MustVisitList 
            mustVisitList = {this.props.currentCity.mustVisit}
            cityName = {this.props.currentCity.name}
         />
         <MustVisitInfo />
         <TopButton />
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    citiesList: state.cities.map(item => item.name),
    currentCity: state.cities.find(item => item.name === ownProps.params.city)
  }
}

const mapDispatchToProps = dispatch => ({ 
  setCurrentCity: (currCountry, currCity) => {
    dispatch(setCurrentLocationsAction({currentCountry: currCountry, currentCity: currCity}))
  }
})

export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(CityComponent));
