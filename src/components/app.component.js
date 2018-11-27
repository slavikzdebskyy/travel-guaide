import React, { Component } from 'react';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { connect } from 'react-redux';

import HeaderComponent from './header.components/header.component';
import LoginComponent from './login.component/login';

import initialStoreAction from '../redux/actions/initial.store.action';
import routes from '../routes';
import store from '../redux/create.store'

class AppComponent extends Component {

  constructor (props) {
    super(props)    
    this.history = syncHistoryWithStore(browserHistory, store);
  }    

render() { 
  return (      
      <div className = 'app-container'>
          <HeaderComponent />   
          {/* <LoginComponent />         */}
          <Router history = {this.history}>
            {routes}                     
          </Router>
      </div>
    );  
  }
};

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = (dispatch) => { 
  return dispatch(initialStoreAction());
}


export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
  