import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CitiesList from '../cities.list';
import MustVisitList from './must.visit.list';
import Description from '../description';
import MustVisitInfo from './must.visit.info';
import ErorrComponent from '../error';

import { getCurrentCityAction } from '../../redux/actions/get.data.actions';
import TopButton from '../top.button';

class CityComponent extends Component {   

  componentDidMount () {    
    this.props.setCurrentCity(this.props.match.params.city);
  }  

  render() {  
    return (
      <Switch>
        <Route exact path = '/:country/:city'>
          {this.props.currentCity.name ? 
          <div className = 'city-component-container'>           
            <Description 
              descriptionsArr = {this.props.currentCity.description}
              title = {this.props.currentCity.title}
            />   
            <CitiesList citiesList = {this.props.citiesList} />
            <MustVisitList />
            <TopButton />            
          </div>
          : <ErorrComponent />}
        </Route>
        <Route path = '/:country/:city/:location' component = {MustVisitInfo}/>
      </Switch>
    );
  }
}


const mapStateToProps = state => {
  return {
    currentCity: state.currentCity,
    citiesList: state.cities.map(item => item.name)    
  }
}

const mapDispatchToProps = dispatch => ({ 
  setCurrentCity: cityName => {
    dispatch(getCurrentCityAction(cityName))
  } 
})

export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(CityComponent));
