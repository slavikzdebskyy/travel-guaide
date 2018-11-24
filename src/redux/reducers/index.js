import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import initialStoreReducer from './initial.store.reducer';

export default  combineReducers ({
  routing: routerReducer,
  countries: initialStoreReducer
});