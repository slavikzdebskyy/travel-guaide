import { combineReducers } from 'redux';

import initialCountriesReducer from './initial.countries.reducer';
import initialCitiesReducer from './initial.cities.reduser';
import setLocationsReducer from './set.locations.reducer';

export default combineReducers ({
  countries: initialCountriesReducer,
  cities: initialCitiesReducer,
  currentLocation: setLocationsReducer 
})