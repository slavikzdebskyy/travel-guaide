import { combineReducers } from 'redux';

import CountriesReducer from './countries_reducer';

export default combineReducers ({
  countries: CountriesReducer
  
})