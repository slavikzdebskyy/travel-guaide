import { combineReducers } from 'redux';

import getCountryReducer from './get.data.country.reducer';
import getCitiesReducer from './get.data.cities.reducer';
import setLocationsReducer from './set.locations.reducer';
import setMustVisitInfoReducer from './set.must.visit.info.reducer';
import setHeaderBackgroundReducer from './set.header.background.reducer';
import getCityReducer from './get.data.city.reducer';
import toggleVisitInfoModalReducer from './toggle.login.reducer';

export default combineReducers ({
  country: getCountryReducer,
  cities: getCitiesReducer,
  currentLocation: setLocationsReducer,
  mustVisitInfo: setMustVisitInfoReducer,
  headerBackground: setHeaderBackgroundReducer,
  currentCity: getCityReducer,
  isVisibleLogin: toggleVisitInfoModalReducer
})