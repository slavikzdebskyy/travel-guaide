import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import CitiesList from '../cities.list';
import MustVisitList from './must.visit.list';
import Description from '../description';



class CityComponent extends Component {  

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

export default  withRouter(connect(mapStateToProps)(CityComponent));
