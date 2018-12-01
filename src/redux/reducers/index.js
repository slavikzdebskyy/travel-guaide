import { combineReducers } from 'redux';

import initialCountriesReducer from './initial.countries.reducer';
import initialCitiesReducer from './initial.cities.reducer';
import setLocationsReducer from './set.locations.reducer';
import setMustVisitInfoReducer from './set.must.visit.info.reducer';

export default combineReducers ({
  countries: initialCountriesReducer,
  cities: initialCitiesReducer,
  currentLocation: setLocationsReducer,
  mustVisitInfo: setMustVisitInfoReducer
})