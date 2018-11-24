import React from 'react';
import { Route, IndexRoute } from 'react-router';

import MapComponent from './components/map.component/map.component';
import CountryComponent from './components/main.components/country.component';
import CityComponent from './components/main.components/city.component'

const routes = (
  <Route path = '/' >  
    <IndexRoute component={MapComponent} />
    <Route path = '/:country'>
      <IndexRoute component = {CountryComponent} />
      <Route path = '/:country/:city' component = {CityComponent} />
    </Route> 
  </Route>
)

export default routes;