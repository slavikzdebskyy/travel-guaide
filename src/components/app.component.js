import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import MapComponent from '../components/map.component/map.component';
import HeaderComponent from '../components/header.component/header.component';
import MainComponent from './main.component/main.component';

import reducer from '../redux/reducers'

class AppComponent extends Component {

  constructor (props) {
    super(props)
    
    this.store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
    this.history = syncHistoryWithStore(browserHistory, this.store);   
  }  

  getCountry = value => {
    return this.history.push(`/country/${value}`);
  } 

render(){
  return (    
      <div className = 'app-container'>
        
        <Provider store = {this.store}>
        <div>
          <HeaderComponent />
          <Router history = {this.history}>
            <Route path = '/' component = {() => <MapComponent getCountry = {this.getCountry}/>} />
            <Route path = '/country/:country' component = {MainComponent} />          
          </Router>
        </div>
        </Provider>        
      </div>
    );  
  }
};

export default AppComponent;