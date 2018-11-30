import React, { Component } from 'react';
import { Router, browserHistory } from 'react-router';
import { connect } from 'react-redux';

import HeaderComponent from './header.components/header.component';
import initialStoreAction from '../redux/actions/initial.store.action';

import routes from '../routes';

class AppComponent extends Component {

  constructor (props) {
    super(props)    
    this.props.initStore();    
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
  initStore: () => {
    dispatch(initialStoreAction())
  } 
})


export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
  
