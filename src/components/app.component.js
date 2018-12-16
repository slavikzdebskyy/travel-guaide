import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HeaderComponent from './header.components/header.component';
import MapComponent from './map.component/map.component';
import CountryComponent from './country.components/country.component';

class AppComponent extends Component {

render() {
  return (      
    <div className = 'app-container'>   
      <BrowserRouter>        
        <div>  
          <HeaderComponent />
          <Switch>
            <Route exact path = '/' component = {MapComponent} />             
            <Route path = '/:country' component = {CountryComponent} />            
          </Switch>  
        </div>                 
      </BrowserRouter>
    </div>
    );  
  }
};

export default AppComponent;
  
