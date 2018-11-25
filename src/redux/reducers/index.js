import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import initialCountriesReducer from './initial.countries.reducer';
import initialCitiesReducer from './initial.cities.reduser';

export default combineReducers ({
  routing: routerReducer,
  countries: initialCountriesReducer,
  cities: initialCitiesReducer 
})