import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import CitiesList from '../cities.list';
import MustVisitList from './must.visit.list';


class CityComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    if (this.props.currentCity && this.props.currentCity.bg_image !== '') {
      this.setState({
        backgroundImage: { backgroundImage: "url(" +  this.props.currentCity.bg_image  + ")" }
      })
    } else {
      this.setState({
        backgroundImage: { backgroundImage: 'none' }
      })
    }
  }
  

  

  render() { 
    return (
      <div 
        className = 'city-component-container'
        style = { this.state.backgroundImage }
      >       
       <MustVisitList 
        mustVisitList = {this.props.currentCity.mustVisit}
        cityName = {this.props.currentCity.name}
      />
       <CitiesList citiesList = {this.props.citiesList} />
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
