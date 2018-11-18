import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import MapComponent from '../components/map_component/map_component';
import HeaderComponent from '../components/header_component/header_component';
import CountryComponent from '../components/coutry_component/country_component';

import reducer from '../redux/reducers'


class AppComponent extends Component {

  constructor (props) {
    super(props)

    this.state = {
      country: ''
    }; 
    this.store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
    this.history = syncHistoryWithStore(browserHistory, this.store);   
  }  

  updateData = value => {
    this.setState({ country: value });
    return this.history.push(`/country/${value}`);
  } 

render(){
  return (    
      <div className = 'app-container'>
        <HeaderComponent country = {this.state.country} />
        <Provider store = {this.store}>
          <Router history = {this.history}>
            <Route path = '/' component = {() => <MapComponent updateData={this.updateData}/>} />
            <Route path = '/country/:country' component = {CountryComponent} />          
          </Router>
        </Provider>        
      </div>
    );  
  }
}

export default AppComponent;