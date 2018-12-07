import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HeaderComponent from './header.components/header.component';
import mapComponent from './map.component/map.component';
import countryComponent from './country.components/country.component';

class AppComponent extends Component {

render() {
  return (      
    <div className = 'app-container'>   
      <BrowserRouter> 
        <div>
          <HeaderComponent />
          <Switch>
            <Route exact path = '/' component = {mapComponent} /> 
            <Route path = '/:country' component = {countryComponent} /> 
          </Switch>  
        </div>           
      </BrowserRouter>
    </div>
    );  
  }
};

export default AppComponent;
  
