import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import HeaderComponent from './header.components/header.component';
import { initinalCountriesAction, initinalCitiesAction } from '../redux/actions/initial.store.actions';

import mapComponent from './map.component/map.component';
import countryComponent from './country.components/country.component';

class AppComponent extends Component {

  constructor (props) {
    super(props)    
    this.props.initCounrtyInStore();
    this.props.initCityInStore();    
  }    
  
render() {
  return (      
    <div className = 'app-container'>
    <HeaderComponent />
      <BrowserRouter> 
        <Switch>
          <Route exact path = '/' component = {mapComponent} /> 
          <Route path = '/:country' component = {countryComponent} /> 
        </Switch>       
      </BrowserRouter>
    </div>
    );  
  }
};

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = dispatch => ({  
  initCounrtyInStore: () => {
    dispatch(initinalCountriesAction())
  },
  initCityInStore: () => {
    dispatch(initinalCitiesAction())
  } 
})

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
  
