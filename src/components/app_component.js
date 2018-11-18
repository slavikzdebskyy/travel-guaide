import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import { Redirect } from 'react-router';

import MapComponent from '../components/map_component/map_component';
import HeaderComponent from '../components/header_component/header_component';
import CountryComponent from '../components/coutry_component/country_component';

class AppComponent extends Component {

  constructor (props) {
    super(props)

    this.state = {
      country: ''
    };    
  }  

  updateData = (value) => {
    this.setState({ country: value });
    // return this.history.push(`/country/${value}`);
    // return (() => <Redirect push to {...`/country/${value}`} />)
    // console.log('data', this)

 } 

render(){
  return (    
      <div className = 'app-container'>
        <HeaderComponent 
          country = {this.state.country}
        />
        <Switch>
          <Route exact path = '/' component = { ()=> <MapComponent updateData = {this.updateData} />} />                     
          <Route path = '/country/:country' component = {CountryComponent} />
        </Switch>
      </div>
  );  
  }
}


export default AppComponent;