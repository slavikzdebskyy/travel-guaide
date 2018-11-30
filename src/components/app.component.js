import React, { Component } from 'react';
import { Router, browserHistory } from 'react-router';
import { connect } from 'react-redux';

import HeaderComponent from './header.components/header.component';
import { initinalCountriesAction, initinalCitiesAction } from '../redux/actions/initial.store.actions';

import routes from '../routes';

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
      <Router history = {browserHistory}>           
        {routes}                  
      </Router>
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
  
