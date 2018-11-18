import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import countriesReducer from './countries_reducer';

export default  combineReducers ({
  routing: routerReducer,
  countries: countriesReducer  
});