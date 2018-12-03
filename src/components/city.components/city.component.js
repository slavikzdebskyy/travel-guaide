import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CitiesList from '../cities.list';
import MustVisitList from './must.visit.list';
import Description from '../description';
import MustVisitInfo from './must.visit.info';
import ErorrComponent from '../error';

import setCurrentLocationsAction from '../../redux/actions/set.current.location.action';
import setHeaderBackgroundReducer from '../../redux/actions/set.header.background.action';
import TopButton from '../top.button';


class CityComponent extends Component {  

  componentDidMount () {
    this.props.setCurrentCity(this.props.match.params.country, this.props.match.params.city);    
  }
  componentDidUpdate () {
    this.props.setHeaderBackground(this.props.currentCity.bg_image);
  }

  render() { console.log('CIty =>', this.props.currentCity)
    return (
      <Switch>
        <Route exact path = '/:country/:city'>
          {this.props.currentCity.description ? 
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
            <TopButton />
            
          </div>
          : <ErorrComponent />}
        </Route>
        <Route path = '/:country/:city/:location' component = {MustVisitInfo}/>
      </Switch>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    citiesList: state.cities.map(item => item.name),
    currentCity: state.cities.find(item => item.name === ownProps.match.params.city)
  }
}

const mapDispatchToProps = dispatch => ({ 
  setCurrentCity: (currCountry, currCity) => {
    dispatch(setCurrentLocationsAction({currentCountry: currCountry, currentCity: currCity}))
  },
  setHeaderBackground : (bgUrl) => {
    dispatch(setHeaderBackgroundReducer(bgUrl))
  }
})

export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(CityComponent));
